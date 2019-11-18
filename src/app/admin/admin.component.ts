import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private logginService: LogginService,private router:Router,) { }

  
 public logout() : void{
   this.logginService.logout;
   this.router.navigate(['/login'])
 }
  ngOnInit() {
  }
  toAdmin(){
    this.router.navigate(['/adminIn'])
  }
  toCompany(){
    this.router.navigate(['/companyIn'])
  }
  toCustomer(){
    this.router.navigate(['/customerIn'])
  }
  
}
