import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'inventory-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  successMsg: string | undefined = ''

  constructor(private route:Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
   if(this.loginService.login(this.email, this.password)){
    console.log(this.email);
    console.log(this.password);
    
    this.route.navigate(['/rooms']);
   }
    // if (this.email === 'admin@123' && this.password === 'admin') {
    //   this.route.navigate(['/rooms']);
    //   this.successMsg = 'login successful';
    // }
    setTimeout(() => {
      this.successMsg = '';
    }, 2000);
  }

}
