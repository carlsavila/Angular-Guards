import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notsecured',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './notsecured.component.html',
  styleUrl: './notsecured.component.scss'
})
export class NotsecuredComponent {

  authSvc: AuthService = inject(AuthService)

}
