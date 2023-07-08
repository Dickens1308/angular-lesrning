import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../../modules/auth/auth.service";
import {inject} from "@angular/core";

export const canActivateUser: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  if (inject(AuthService).loggedIn()) {
    inject(Router)
      .navigate(['/dashboard'])
      .then((r: boolean): boolean => {
        console.log(r);
        return r;
      })

    return true
  }

  inject(Router)
    .navigate(['/auth/login'])
    .then((r: boolean): boolean => {
      console.log(r);
      return r;
    })
    .catch((e: any) => console.log(e));

  return false
};
