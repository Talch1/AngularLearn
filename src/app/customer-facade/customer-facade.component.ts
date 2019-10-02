import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../services/customer-service.service';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { Coupon } from '../beans/Coupon';

@Component({
  selector: 'app-customer-facade',
  templateUrl: './customer-facade.component.html',
  styleUrls: ['./customer-facade.component.css']
})
export class CustomerFacadeComponent implements OnInit {



  ngOnInit() {
  }


  constructor(private logginService: LogginService, private router: Router, private customerService: CustomerServiceService) { }

  coupon: Coupon = new Coupon();
  coupons: Coupon[];
  massage: string;

  custId: string = '2010';
  coupId: string;

  couponType: string;
  date: Date;
  price: number;



  AddCouponOpenFlag = false;
  CouponByTypeFlag = false;
  CouponByDateFlag = false;
  CouponByPriceFlag = false;
  CouponArrFlag = false;
  OneCouponFlag = false;

  allFallse() {
    this.AddCouponOpenFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
    this.CouponArrFlag = false;
    this.OneCouponFlag = false;
  }
  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  PurchoiseCoupon() {

    // work but throw ERROR

    this.customerService.addCouponToCustomer({ custId: this.custId, coupId: this.coupId }).subscribe(response => {
      console.log(response);
    }, err => {
      alert("Error " + err.massage)
    })

    alert('This coupon added')
    this.AddCouponOpenFlag = false;
  }

  GetAllCoupons() {

    this.customerService.getAllCoupons(this.custId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFallse();
    this.CouponArrFlag = true;

  }

  FindCpouponByType() {
    this.customerService.getCouponByType(this.couponType, this.custId).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.CouponArrFlag = true;
  }

  FindCpouponByDate() {
    this.customerService.getCouponByDate(this.date, this.custId).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.CouponArrFlag = true;
  }

  FindCpouponByPrice() {
    this.customerService.getCouponByPrice(this.price, this.custId).subscribe(
      (response) => {
        this.coupons = response;
        console.log(this.coupons);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.CouponArrFlag = true;
  }

  AddCouponOpen() {
    this.allFallse();
    this.AddCouponOpenFlag = true;

  }

  GetAllCouponsOPen() {
    this.allFallse();
  }

  GetCouponsByTypeOPen() {
    this.allFallse();
    this.CouponByTypeFlag = true;
  }
  GetCouponsByDateOPen() {
    this.allFallse();
    this.CouponByDateFlag = true;

  }
  GetCouponsByPriceOPen() {
    this.allFallse();
    this.CouponByPriceFlag = true;

  }

}


