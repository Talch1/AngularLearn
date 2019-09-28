import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company-service';
import { Coupon } from '../beans/Coupon';



@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor(private logginService: LogginService, private router: Router, private companyService: CompanyService) { }
  coupon: Coupon = new Coupon();
  
  compId: number;
  coupId: number;


  AddCouponOpenFlag = false;
  CreateCouponFlag = false;

  AddCouponOpen() {
    this.AddCouponOpenFlag = true;
    this.CreateCouponFlag = false;
  }
  AddNewCouponOpen() {
    this.CreateCouponFlag = true;
    this.AddCouponOpenFlag = false;
  }
  CreateThisCoupon(){
    console.log(this.coupon)
  }

  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }

  ngOnInit() {

  }



}
