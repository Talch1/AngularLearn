import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company-service';
import { Coupon } from '../beans/Coupon';
import { from } from 'rxjs';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor(private logginService: LogginService, private router: Router, private companyService: CompanyService) { }
  coupon: Coupon = new Coupon();
  coupons: Coupon[];
  massage: string;

  compId: string = '201';
  coupId: string;

  couponType: string;
  date: Date;
  price: number;

  AddCouponOpenFlag = false;
  CreateCouponFlag = false;
  GetCuponFlag = false;
  DeleteCouponFlag = false;
  UpdateCoponFlag = false;
  CouponByTypeFlag = false;
  CouponByDateFlag = false;
  CouponByPriceFlag = false;

  AddCouponToCompany() {

    // work but throw ERROR

    this.companyService.addCouponToCompany(this.compId, this.coupId).subscribe(response => {
console.log(response);
      }
    )
    this.coupId = "";
    this.AddCouponOpenFlag = false;
  }
  CreateThisCoupon(coupon: Coupon) {

    this.companyService.addCoupon(this.coupon, this.compId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
    })
    this.coupon.amount = 0;
    this.coupon.endDate = null;
    this.coupon.id = "";
    this.coupon.image = "";
    this.coupon.message = "";
    this.coupon.price = 0;
    this.coupon.startDate = null;
    this.coupon.title = "";
    this.coupon.type = "";
    this.CreateCouponFlag = false;
  }
  GetCoupon() {
    this.companyService.getCoupon(this.coupId).subscribe(response => {
      this.coupon = response;
      console.log(this.coupon);

    }
    )
    this.coupId = "";
    this.GetCuponFlag = false;
  }
  GetAllCoupons() {

    this.companyService.getAllCoupons(this.compId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
    })
  }
  DeleteCouponById(){
    this.companyService.delete(this.coupId).subscribe( response=>{
      console.log(response);
    }

      )
      this.coupId = "";
      this.DeleteCouponFlag = false;
  }
  DeleteAllCoupons() {
    this.companyService.deleteAll(this.compId).subscribe( response=>{
      console.log(response);
    }

      )
  }

  UpdateCopon() {
    this.companyService.updateCoupon(this.coupon,this.coupId).subscribe(
      response =>
      {
        this.coupon = response;
        console.log(this.coupon);
      }
    )
    this.coupId = "";
    this.coupon.endDate = null;
    this.coupon.price = 0;
    this.UpdateCoponFlag = false;
  }
  FindCpouponByType() {
    
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
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = true;
  }
}
