import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth0Service } from '../services/auth0.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class GuardScopesService {
  constructor(public authService: Auth0Service, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const scopes = (route.data as any).expectedScopes;
    if (!this.authService.authenticated || (!this.authService.checkScopes(['all:administrador']) && !this.authService.checkScopes(scopes))) {
      this.router.navigate(['/inicio']);
      return false;
    }
    return true;
  }
}
