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
  public flags: boolean[] = [];

  AddCouponOpenFlag = false;
  CreateCouponFlag = false;
  GetCuponFlag = false;
  DeleteCouponFlag = false;
  GetAllCouponsFlag = false;
  DeleteAllCouponFlag = false;

  AddCouponOpen() {
    
    this.AddCouponOpenFlag = true;
    this.CreateCouponFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
  }
  AddNewCouponOpen() {
    this.CreateCouponFlag = true;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
  }
  GetCoponByIDOpen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = true;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
  }
  DeleteCoponByIDOpen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = true;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
  }
  GetAllCouponsOPen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = true;
    this.DeleteAllCouponFlag = false;
  }
  DeleteAllCouponsOPen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = true;
  }

  CreateThisCoupon() {
    ///////////////////////////////////////////////
  }
  GetCoupon() {
    //////////////////////////////////////////
  }

  AddCouponToCompany() {
    ///////////////////////////////////////////////////
  }
  GetAllCoupons() {
    ///////////////////////////////////
  }
  DeleteAllCoupons(){
    ////////////////////////////////////////////////////
  }

  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.flags.push(
      this.AddCouponOpenFlag = false, 
      this.CreateCouponFlag = false,
      this.GetCuponFlag = false,
      this.DeleteCouponFlag = false,
      this.GetAllCouponsFlag = false,
    )
  }



}
