import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


export const MonAuthGuard = () => {
  console.log('MonAuthGuard : navigationdetected');

  const auth: AuthService = inject(AuthService);
  const router: Router = inject(Router);


  if (auth.isAuthenticated()) {
    //Forbiden : infinite loop = router.navigateByUrl('/secured')
    console.log("logué, redirection vers secured ")
    return true
  }

  router.navigateByUrl('/notsecured')
  console.log("no logué, redirection vers notsecured ")
  return false

};
