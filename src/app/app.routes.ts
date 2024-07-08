import { Routes } from '@angular/router';
import { SecuredComponent } from './secured/secured.component';
import { NotsecuredComponent } from './notsecured/notsecured.component';
import { authenticationGuard } from './core/authentication.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'secured',
        component: SecuredComponent,
        canActivate: [authenticationGuard]
    },
    {
        path: 'notsecured',
        component: NotsecuredComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
    },
];
