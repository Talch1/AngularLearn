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
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  public credentials = new Credentials;



  login(): void {
 //   if(this.LogginService.ifExistDemo(this.credentials)){
   
//   if(this.LogginService.auth(this.credentials).subscribe()){
//       if (this.credentials.type === 'Customer' && ){
//         this.router.navigate(["/cust"]);
//       }
//       else if (this.credentials.type === 'Company'){
//         this.router.navigate(["/comp"]);
//       }
//       else if (this.credentials.type === 'Admin'){
//         this.router.navigate(["/admin"]);
//       }
//     }else{
//       alert("Incorrect password or login")
//     }

    
//   }

//   constructor(private LogginService : LogginService,private router :Router) { }

//   ngOnInit() {
//   }


// }
  }
}