import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { Coupon } from '../beans/Coupon';
import { CustomerServiceService } from '../services/customer-service.service';
import { timeout } from 'q';


@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {
  ngOnInit(){}
 


  constructor(private logginService: LogginService, private router: Router, private customerService: CustomerServiceService) { }

  coupon: Coupon = new Coupon();
  coupons: Coupon[];
  massage: string;

  custId: number = 2010;
  coupId: number ;

  couponType: string;
  date: Date;
  price: number;

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

  addCouponOpenFlag = false;
  couponByIdFlag = false;
  couponByTypeFlag = false;
  couponByDateFlag = false;
  couponByPriceFlag = false;
  couponArrFlag = false;
  oneCouponFlag = false;

  allFalse() {
    this.couponByIdFlag = false;
    this.addCouponOpenFlag = false;
    this.couponByTypeFlag = false;
    this.couponByDateFlag = false;
    this.couponByPriceFlag = false;
    this.couponArrFlag = false;
    this.oneCouponFlag = false;
  }
  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  
  purchaseCoupon(){
  this.customerService.addCouponToCustomer(this.custId,this.coupId).subscribe(response => {
    this.coupons = response;
    console.log(this.coupons);
  }, err => {
    alert("Error " + err.massage)
  })
  this.allFalse();
  this.couponArrFlag = true;
}

  getAllCoupons() {

    this.customerService.getAllCoupons(this.custId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.couponArrFlag = true;

  }

  findCpouponById(){
    this.customerService.getCouponById(this.custId,this.coupId).subscribe(
      responce => {
        this.coupon = responce;
        console.log(this.coupon);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.oneCouponFlag = true;
  }
  adminfindCpouponById(){
    this.customerService.adminGetCouponById(this.coupId).subscribe(
      responce => {
        this.coupon = responce;
        console.log(this.coupon);
      }, err => {
        alert("Error " + err.massage)
      }

    )
  }
  findCpouponByType() {
    this.customerService.getCouponByType(this.couponType, this.custId).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.couponArrFlag = true;
  }

  findCpouponByDate() {
    this.customerService.getCouponByDate(this.date, this.custId).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.couponArrFlag = true;
  }

  findCpouponByPrice() {
    this.customerService.getCouponByPrice(this.price, this.custId).subscribe(
      (response) => {
        this.coupons = response;
        console.log(this.coupons);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.couponArrFlag = true;
  }

  addCouponOpen() {
    this.allFalse();
    this.addCouponOpenFlag = true;

  }

  getAllCouponsOPen() {
    this.allFalse();
  }

  getCouponsByTypeOPen() {
    this.allFalse();
    this.couponByTypeFlag = true;
  }
  getCouponsByDateOPen() {
    this.allFalse();
    this.couponByDateFlag = true;

  }
  getCouponsByPriceOPen() {
    this.allFalse();
    this.couponByPriceFlag = true;

  }
  getCouponsByIdOPen(){
    this.allFalse();
    this.couponByIdFlag = true; 
  }

}