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

  custId: number = 2010;
  coupId: number;

  couponType: string;
  date: Date;
  price: number;
  token: string;

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
  existPurchoise = false;
  existAllCoupon = false;
  existId = false;
  existType = false;
  existDate = false;
  existPrice = false;
  incomsArrFlag = false;

  allFalse() {
    this.couponByIdFlag = false;
    this.addCouponOpenFlag = false;
    this.couponByTypeFlag = false;
    this.couponByDateFlag = false;
    this.couponByPriceFlag = false;
    this.couponArrFlag = false;
    this.oneCouponFlag = false;
    this.existPurchoise = false;
    this.existAllCoupon = false;
    this.existId = false;
    this.existType = false;
    this.existDate = false;
    this.existPrice = false;
    this.incomsArrFlag = false;
  }
  public logout(): void {
    this.customerService.logout(this.token).subscribe();
    this.logginService.logout;
    this.router.navigate(['/login'])
  }

  purchaseCoupon() {
    this.customerService.addCouponToCustomer(this.token, this.coupId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
      this.allFalse();
      this.couponArrFlag = true;
    }, err => {
      this.allFalse();
      this.existPurchoise = true;
    })
  }
  getAllCoupons() {
    this.customerService.getAllCoupons(this.token).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
      this.allFalse();
      this.couponArrFlag = true;
      if (this.coupons.length == 0) {
        this.allFalse();
        this.existAllCoupon = true;
      }
    }, err => {
      this.allFalse();
      this.existAllCoupon = true;
    })
  }
  findCpouponById() {
    this.customerService.getCouponById(this.token, this.coupId).subscribe(
      responce => {
        this.coupon = responce;
        console.log(this.coupon);
        this.allFalse();
        this.oneCouponFlag = true;
        if (this.coupon.id == 0) {
          this.allFalse();
          this.existId = true;
        }
      }, err => {
        this.allFalse();
        this.existId = true;
      }
    )
  }

  findCpouponByType() {
    this.customerService.getCouponByType(this.couponType, this.token).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
        this.allFalse();
        this.couponArrFlag = true;
      }, err => {
        this.allFalse();
        this.existType = true;
      }
    )

  }
  findCpouponByDate() {
    this.customerService.getCouponByDate(this.date, this.token).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
        this.allFalse();
        this.couponArrFlag = true;
        if (this.coupons.length == 0) {
          this.allFalse();
          this.existDate = true;
        }
      }, err => {
        this.allFalse();
        this.existDate = true;
      }

    )
  }
  findCpouponByPrice() {
    this.customerService.getCouponByPrice(this.price, this.token).subscribe(
      (response) => {
        this.coupons = response;
        console.log(this.coupons);
        this.allFalse();
        this.couponArrFlag = true;
        if (this.coupons.length == 0) {
          this.allFalse();
          this.existPrice = true;
        }
      }, err => {
        this.allFalse();
        this.existPrice = true;
      }
    )
  }

  //************************************************************************************************************ */
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
  getCouponsByIdOPen() {
    this.allFalse();
    this.couponByIdFlag = true;
  }

}