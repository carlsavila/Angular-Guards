import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authSvc = inject(AuthService)
  const router = inject(Router)

  if (authSvc.isAuthenticated()) {
    console.log("logué, return true ", route, state)
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};
