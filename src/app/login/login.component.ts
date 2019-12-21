import { Component, OnInit } from '@angular/core';
import { User } from '../beans/User';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent {

  public user = new User;
  public token: string;
  public incorrect = false;
  constructor(private logginService: LogginService, private router: Router) { }

  logging() {
    this.logginService.auth(this.user).subscribe(response => {
      this.token = response.body;
      this.logginService.token = this.token;
      if (this.user.role === 'Customer' && this.token != null) {
        this.logginService.type = this.user.role;
        this.logginService.inLoggedIn = true;
        this.router.navigate(["/cust"]);
      }
      else if (this.user.role === 'Company' && this.token != null) {
        this.logginService.type = this.user.role;
        this.logginService.inLoggedIn = true;
        this.router.navigate(["/comp"]);
      }
      else if (this.user.role === 'Admin' && this.token != null) {
        this.logginService.type = this.user.role;
        this.logginService.inLoggedIn = true;
        this.router.navigate(["/adminIn"]);
      }
    }, err => {
      this.incorrect = true;
      console.log(err);
    })

  }
}