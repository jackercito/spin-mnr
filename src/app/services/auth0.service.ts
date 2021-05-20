import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

import { AUTH_CONFIG } from './auth0-variables'

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {
  private _Auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: AUTH_CONFIG.RESPONSE_TYPE,
    audience: AUTH_CONFIG.AUDIENCE,
    redirectUri: AUTH_CONFIG.REDIRECT,
    scope: 'openid'
  });

  userProfile: any;
  accessToken: string;
  expiresAt: number;
  scopes: string;

  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean = false;
  loggingIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  refreshSub: Subscription;

  constructor(private router: Router) {
    // If app auth token is not expired, request new token
    if (JSON.parse(localStorage.getItem('expires_at')) > Date.now()) {
      this.renewToken();
    }
  }

  private _setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login() {
    // Auth0 authorize request
    this._Auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    this._Auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
    });
  }

  getUserInfo(authResult) {
    this.loggingIn = true;
    // Use access token to retrieve user's profile and set session
    this._Auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      this._setSession(authResult, profile);
    });
  }

  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    // Store expiration in local storage to access in constructor
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));

    this.accessToken = authResult.accessToken;

    if (profile) {
      this.userProfile = profile;
    }

    this.scopes = authResult.scope;
    this._setLoggedIn(true);
    this.loggingIn = false;
    // Schedule access token renewal
    this.scheduleRenewal();
  }

  private _clearExpiration() {
    // Remove token expiration from localStorage
    localStorage.removeItem('expires_at');
  }

  logout() {
    // Remove data from localStorage
    this._clearExpiration();
    // Remove token and profile, update login status subject,
    // and log out of Auth0 authentication session
    // This does a refresh and redirects back to homepage
    // Make sure you have the returnTo URL in your Auth0
    // Dashboard Application settings in Allowed Logout URLs
    this._Auth0.logout({
      returnTo: AUTH_CONFIG.RETURN_URL,
      clientID: AUTH_CONFIG.CLIENT_ID
    });
  }

  get tokenValid(): boolean {
    // Check if current time is past access token's expiration
    return Date.now() < JSON.parse(localStorage.getItem('expires_at'));
  }

  renewToken() {
    // Check for valid Auth0 session
    this._Auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult);
      } else {
        this._clearExpiration();
      }
    });
  }

  get authenticated(): boolean {
    // Check if current date is greater than
    // expiration and user is currently logged in
    return (Date.now() < this.expiresAt) && this.loggedIn;
  }

  checkScopes(listaScopes: Array<string>): boolean {
    if (this.scopes != null) {
      const grantedScopes = (this.scopes).split(' ');
      if (grantedScopes.includes('all:administrador'))
        return true;
      return listaScopes.every(scope => grantedScopes.includes(scope));
    }
    return;
  }

  scheduleRenewal() {
    // If last token is expired, do nothing
    if (!this.tokenValid) { return; }
    // Unsubscribe from previous expiration observable
    this.unscheduleRenewal();
    // Create and subscribe to expiration observable
    const expiresIn$ = of(this.expiresAt).pipe(
      mergeMap(
        (expires: number) => {
          const now = Date.now();
          // Use timer to track delay until expiration
          // to run the refresh at the proper time
          return timer(Math.max(1, expires - now));
        }
      )
    );

    this.refreshSub = expiresIn$
      .subscribe(
        () => {
          this.renewToken();
          this.scheduleRenewal();
        }
      );
  }

  unscheduleRenewal() {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
    }
  }
}
