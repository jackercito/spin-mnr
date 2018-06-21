import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Auth0Service } from './auth0.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth0Service, private router: Router) { }

  canActivate() {
    if (this.auth.authenticated) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
