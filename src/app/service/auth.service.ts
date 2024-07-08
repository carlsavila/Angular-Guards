import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isauthenticated = false;

  login(){
    this.isauthenticated=true;
  }

  logout() {
    this.isauthenticated=false;
  }

  isAuthenticated(): boolean {
    return this.isauthenticated;
  }
}
