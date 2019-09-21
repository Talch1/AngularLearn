import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {
  

  constructor(private logginService : LogginService,private router:Router) { }
  
  public logout() : void{
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

}
