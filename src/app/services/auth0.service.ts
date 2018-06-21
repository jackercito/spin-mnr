import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as auth0 from 'auth0-js';
import { UserProfile } from './../componentes/auth0/perfil/perfil.model';

//import { AUTH_CONFIG } from './auth0-variables'

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  private _Auth0 = new auth0.WebAuth({
    //clientID: AUTH_CONFIG.CLIENT_ID,
    //domain: AUTH_CONFIG.CLIENT_DOMAIN,
    //responseType: AUTH_CONFIG.RESPONSE_TYPE,
    //redirectUri: AUTH_CONFIG.REDIRECT,
    //audience: AUTH_CONFIG.AUDIENCE,
    //scope: ""
  });
  userProfile: UserProfile;
  accessToken: string;
  expiresAt: number;

  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor() { }

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
    // Use access token to retrieve user's profile and set session
    this._Auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      this._setSession(authResult, profile);
    });
  }

  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this._setLoggedIn(true);
  }

  logout() {
    // Remove token and profile, update login status subject,
    // and log out of Auth0 authentication session
    // This does a refresh and redirects back to homepage
    // Make sure you have the returnTo URL in your Auth0
    // Dashboard Application settings in Allowed Logout URLs
    this._Auth0.logout({
      //returnTo: AUTH_CONFIG.RETURN_URL,
      //clientID: AUTH_CONFIG.CLIENT_ID
    });
  }

  get authenticated(): boolean {
    // Check if current date is greater than
    // expiration and user is currently logged in
    return (Date.now() < this.expiresAt) && this.loggedIn;
  }
}
