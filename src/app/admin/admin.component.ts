import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { Company } from '../beans/Company';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private logginService: LogginService,private router:Router,) { }

  companys: Company[];
  
 public logout() : void{
   this.logginService.logout;
   this.router.navigate(['/login'])
 }
  ngOnInit() {
  }

  
}
