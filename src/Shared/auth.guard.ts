import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot,Router, CanActivate, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard{
  constructor(
    protected readonly router: Router,
    public keycloak: KeycloakService,
    public sharedservice:SharedService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin,
      });
    }
    // Get the roles required from the route.
    const requiredRoles = route.data.roles;
   console.log(this.keycloak._instance.idTokenParsed)
   this.sharedservice.userObj.next(this.keycloak._instance.idTokenParsed)
   this.sharedservice.role.next(this.roles[0])
    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
}
