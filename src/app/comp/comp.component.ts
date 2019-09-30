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
  coupons : Coupon [] =  [];
  massage:string;

  compId: string;
  coupId: string;
  
  couponType: string;
  date: Date;
  price: number;

  AddCouponOpenFlag = false;
  CreateCouponFlag = false;
  GetCuponFlag = false;
  DeleteCouponFlag = false;
  GetAllCouponsFlag = false;
  DeleteAllCouponFlag = false;
  UpdateCoponFlag = false;
  CouponByTypeFlag = false;
  CouponByDateFlag = false;
  CouponByPriceFlag = false;
  
  AddCouponToCompany() {

    // work but throw ERROR

    this.companyService.addCouponToCompany(this.compId,this.coupId).subscribe()
    this.compId="";
    this.coupId="";
  }
  CreateThisCoupon(coupon:Coupon) {
    ///////////////////////////////////////////////

    this.companyService.addCoupon(this.coupon,this.compId).subscribe(coupons =>{
      coupons = this.coupons;
      console.log(coupons); 
      this.coupon= null;
  },)
}
  GetCoupon() {
    //////////////////////////////////////////
  }  
  GetAllCoupons() {
    ///////////////////////////////////????????????????????????????????????????????????????????????????????????????????????
  
     this.companyService.getAllCoupons(this.compId).subscribe(coupons =>{
        coupons = this.coupons;
        console.log(coupons); 
      },)
      this.compId="";
  }
  DeleteAllCoupons() {
    ////////////////////////////////////////////////////
  }

  UpdateCopon() {
    //////////////////////////////////////////////
  }
  FindCpouponByType() {
    /////////////////////////////////////////
  }

  FindCpouponByDate() {
    ////////////////////////////////////////////////
  }

  FindCpouponByPrice() {
    ///////////////////////////////////////////
  }
  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }
  AddCouponOpen() {

    this.AddCouponOpenFlag = true;
    this.CreateCouponFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  AddNewCouponOpen() {
    this.CreateCouponFlag = true;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  GetCoponByIDOpen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = true;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  DeleteCoponByIDOpen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = true;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  GetAllCouponsOPen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = true;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  DeleteAllCouponsOPen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = true;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  UpdateCoponOpen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = true;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  GetCouponsByTypeOPen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = true;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
  }
  GetCouponsByDateOPen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = true;
    this.CouponByPriceFlag = false;
  }
  GetCouponsByPriceOPen() {
    this.CreateCouponFlag = false;
    this.AddCouponOpenFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.GetAllCouponsFlag = false;
    this.DeleteAllCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = true;
  }
}
