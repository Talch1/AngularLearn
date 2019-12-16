import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private logginService: LogginService,private router:Router,private adminService: AdminService) { }

  token:string;
  
 public logout() : void{
  this.adminService.logout(this.token).subscribe();
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
