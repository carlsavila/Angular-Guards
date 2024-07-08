import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SecuredComponent } from './secured/secured.component';
import { NotsecuredComponent } from './notsecured/notsecured.component';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SecuredComponent, NotsecuredComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quest18-guard';

  authservice : AuthService = inject(AuthService);

}
