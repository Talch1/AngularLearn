import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../beans/User';
import { from } from 'rxjs';
import { logging } from 'protractor';
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
ifLogintrue = false;
incorrect = false;
constructor(private LogginService : LogginService,private router :Router) { }  

    logging(){
      this.LogginService.auth(this.user).subscribe(response => {
        this.ifLogintrue = response;
        console.log(this.ifLogintrue);
        if (this.user.role === 'Customer' && this.ifLogintrue ==true ){
          this.LogginService.inLoggedIn = true;
          this.router.navigate(["/cust"]);
        }
        else if (this.user.role === 'Company' && this.ifLogintrue ==true){
          this.LogginService.inLoggedIn = true;
          this.router.navigate(["/comp"]);
        }
        else if (this.user.role === 'Admin' && this.ifLogintrue ==true ){
          this.LogginService.inLoggedIn = true;
          this.router.navigate(["/admin"]);
  } 
      }, err => {
        this.incorrect = true;
      })
    
}
}
