import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.check()) {
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.check()) {
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }
}
