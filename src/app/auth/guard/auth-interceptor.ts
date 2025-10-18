import { HttpInterceptorFn } from '@angular/common/http';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth';


@Inject({
  providedIn: 'root'  //Está instrucción lo que realiza es
})

export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){

  }

  /**/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isAuthenticated()){
      if(this.authService.isTokenExpired()){
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
      this.router.navigate(['/login']);
      return false;
  }


    
  
}
