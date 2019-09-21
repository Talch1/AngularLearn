import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor(private logginService :LogginService,private router:Router) { }

  public logout() : void{
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

}
