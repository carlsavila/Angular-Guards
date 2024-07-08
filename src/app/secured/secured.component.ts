import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secured',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './secured.component.html',
  styleUrl: './secured.component.scss'
})
export class SecuredComponent {

  router: Router = inject(Router);
  authSvc: AuthService = inject(AuthService);

  exit(){
    this.authSvc.logout()
    this.router.navigateByUrl('/notsecured')
  }

}
