import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  isAdmin = false;

  constructor() { }

  login(email:string, password:string){
    if(email === 'admin@mail.com' && password === 'admin'){
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if(email === 'user@mail.com' && password === 'user'){
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn
  }
}
