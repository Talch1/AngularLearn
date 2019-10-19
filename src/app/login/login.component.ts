import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../beans/Credentials';
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


  public credentials = new Credentials;
ifLogintrue = false;
incorrect =false;

constructor(private LogginService : LogginService,private router :Router) { }  

    logging(){
      this.LogginService.auth(this.credentials).subscribe(response => {
        this.ifLogintrue = response;
        console.log(this.ifLogintrue);
        if (this.credentials.type === 'Customer' && this.ifLogintrue ==true ){
          this.LogginService.inLoggedIn = true;
          this.router.navigate(["/cust"]);
        }
        else if (this.credentials.type === 'Company' && this.ifLogintrue ==true){
          this.LogginService.inLoggedIn = true;
          this.router.navigate(["/comp"]);
        }
        else if (this.credentials.type === 'Admin' && this.ifLogintrue ==true ){
          this.LogginService.inLoggedIn = true;
          this.router.navigate(["/admin"]);
  } 
      }, err => {
       // alert("Error " + err.massage)
      this.incorrect = true;
      })
    
}
}
