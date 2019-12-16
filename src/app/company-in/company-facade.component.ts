import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company-service';
import { Coupon } from '../beans/Coupon';
import { Income } from '../beans/Income';

@Component({
  selector: 'app-company-facade',
  templateUrl: './company-facade.component.html',
  styleUrls: ['./company-facade.component.css']
})
export class CompanyFacadeComponent implements OnInit {

  constructor(private logginService: LogginService, private router: Router, private companyService: CompanyService) { }
  coupon: Coupon  = new Coupon(1,"",new Date,new Date,5,"RESTURANS","",10,"");
  coupons: Coupon[];
  token: string;
  compId: number = 201;
  coupId: number;
  couponType: string;
  date: Date;
  price: number;
  incomes: Income[] = [];

 
  ngOnInit() {
    this.token = this.logginService.token;
    console.log(this.token);
  
  }
 
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  addCouponOpenFlag = false;
  createCouponFlag = false;
  getCuponFlag = false;
  deleteCouponFlag = false;
  updateCoponFlag = false;
  couponByTypeFlag = false;
  couponByDateFlag = false;
  couponByPriceFlag = false;
  couponArrFlag = false;
  oneCouponFlag = false;
  exist = false;
  wasDeleted = false;
  couponEmpty = false;
  existCoupon = false;
  existType = false;
  existDate = false;
  existPrice = false;
  incomsArrFlag = false;
  incomeNull = false;


  allFalse() {
    this.addCouponOpenFlag = false;
    this.createCouponFlag = false;
    this.getCuponFlag = false;
    this.deleteCouponFlag = false;
    this.updateCoponFlag = false;
    this.couponByTypeFlag = false;
    this.couponByDateFlag = false;
    this.couponByPriceFlag = false;
    this.couponArrFlag = false;
    this.oneCouponFlag = false;
    this.exist = false;
    this.wasDeleted = false;
    this.couponEmpty = false;
    this.existCoupon = false;
    this.existType = false;
    this.existDate = false;
    this.existPrice = false;
    this.incomsArrFlag = false;
    this.incomeNull = false;
  }
  addCouponToCompany() {
    this.companyService.addCouponToCompany(this.token, this.coupId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
      this.allFalse();
      this.couponArrFlag = true;
    }, err => {
      this.allFalse();
      this.exist = true;
    })
  }
  createThisCoupon() {
    this.companyService.addCoupon(this.coupon, this.token).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
      this.allFalse();
      this.couponArrFlag = true;
    }, err => {
      alert("This id is exist")
    })
  }
  getCoupon() {
    this.companyService.getCoupon(this.token, this.coupId).subscribe(response => {
      this.coupon = response;
      console.log(this.coupon);
      this.allFalse();
      this.oneCouponFlag = true;
      if (this.coupon.id === 0) {
        this.allFalse();
        this.existCoupon = true;
      }
    }, err => {
      alert("Error " + err.massage)
    }
    )
  }
  getAllCoupons() {
    this.companyService.getAllCoupons(this.token).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
      this.allFalse();
      this.couponArrFlag = true;
      if (this.coupons.length == 0) {
        this.allFalse();
        this.couponEmpty = true;
      }
    }, err => {
      alert("Error " + err.massage)
    })
  }
  deleteCouponById() {
    this.companyService.delete(this.token, this.coupId).subscribe(response => {
      console.log(response);
      this.coupons = response;
      this.allFalse();
      this.couponArrFlag = true;
      if (this.coupons.length == 0) {
        this.allFalse();
        this.existCoupon = true;
      }
    }, err => {
      this.allFalse();
      this.existCoupon = true;
    }
    )
  }
  deleteAllCoupons() {
    this.companyService.deleteAll(this.token).subscribe(response => {
      console.log(response);
      this.wasDeleted = true;
    }, err => {
      alert("Error " + err.massage)
    }
    )
    this.allFalse();
  }

  updateCopon() {
    this.companyService.updateCoupon(this.coupon, this.token).subscribe(
      response => {
        this.coupon = response;
        console.log(this.coupon);
        this.allFalse();
        this.oneCouponFlag = true;
      }, err => {
        this.allFalse();
        this.existCoupon = true;
      }
    )
  }
  
  findCpouponByType() {
    this.companyService.getCouponByType(this.couponType, this.token).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
        this.couponArrFlag = true;
        if (this.coupons.length == 0) {
          this.allFalse();
          this.existType = true;
        }
      }, err => {
        this.allFalse();
        this.existType = true;
      }
    )
  }

  findCpouponByDate() {
    this.companyService.getCouponByDate(this.date, this.token).subscribe(
      responce => {
        this.coupons = responce;
        console.log(this.coupons);
        this.couponArrFlag = true;
        if (this.coupons.length == 0) {
          this.allFalse();
          this.existDate = true;
        }
      }, err => {
        alert("Error " + err.massage)
      }
    )
  }

  findCpouponByPrice() {
    this.companyService.getCouponByPrice(this.price, this.token).subscribe(
      (response) => {
        this.coupons = response;
        console.log(this.coupons);
        this.couponArrFlag = true;
        if (this.coupons.length == 0) {
          this.allFalse();
          this.existPrice = true;
        }
      }, err => {
        alert("Error " + err.massage)
      }
    )
  }

  getCustIncomes() {
    this.companyService.getCustIncome().subscribe(response => {
      this.incomes = response;
      console.log(this.incomes);
      this.allFalse();
      this.incomsArrFlag = true;
      if (this.incomes.length == 0) {
        this.allFalse();
        this.incomeNull = true;
      }
    }, err => {

      alert("Error " + err.massage)
    })
  }

  public logout(): void {
    this.companyService.logout(this.token).subscribe();
    this.logginService.logout;
    this.router.navigate(['/login'])
  }

  addCouponOpen() {
    this.allFalse();
    this.addCouponOpenFlag = true;

  }
  addNewCouponOpen() {
    this.allFalse();
    this.createCouponFlag = true;
  }
  getCoponByIDOpen() {
    this.allFalse();
    this.getCuponFlag = true;
  }
  deleteCoponByIDOpen() {
    this.allFalse();
    this.deleteCouponFlag = true;

  }
  getAllCouponsOPen() {
    this.allFalse();
  }
  deleteAllCouponsOPen() {
    this.allFalse();
  }
  updateCoponOpen() {
    this.allFalse();
    this.updateCoponFlag = true;
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

}
