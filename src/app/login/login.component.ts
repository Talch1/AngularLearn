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

  private user = new User;
  private message:any;
  private incorrect = false;
  constructor(private logginService: LogginService, private router: Router) { }

  logging() {
    this.logginService.auth(this.user).subscribe(response => {
      this.message = response.body;
      if (this.user.role === 'Customer' && this.message!=null) {
        this.logginService.type = this.user.role;
        this.logginService.inLoggedIn = true;
        this.router.navigate(["/cust"]);
      }
      else if (this.user.role === 'Company' && this.message != null) {
        this.logginService.type = this.user.role;
        this.logginService.inLoggedIn = true;
        this.router.navigate(["/comp"]);
      }
      else if (this.user.role === 'Admin' && this.message != null) {
        this.logginService.type = this.user.role;
        this.logginService.inLoggedIn = true;
        this.router.navigate(["/admin"]);
      }
    }, err => {
      this.incorrect = true;
      console.log(err);
    })

  }
}