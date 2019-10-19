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
  coupons: Coupon[];
  massage: string;

  compId: number = 2;
  coupId: number;

  couponType: string;
  date: Date;
  price: number;
  
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

  allFalse(){
 this.addCouponOpenFlag = false;
 this.createCouponFlag = false;
 this.getCuponFlag = false;
 this.deleteCouponFlag = false;
 this.updateCoponFlag = false;
 this.couponByTypeFlag = false;
 this. couponByDateFlag = false;
 this. couponByPriceFlag = false;
 this. couponArrFlag = false;
 this. oneCouponFlag = false;
  }
  addCouponToCompany() {

    this.companyService.addCouponToCompany(this.compId, this.coupId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
    }, err => {
      alert("Error " + err.massage)
    })
   this.allFalse();
    this.couponArrFlag = true;
  }

  createThisCoupon() {

    this.oneCouponFlag = true;
    this.companyService.addCoupon(this.coupon, this.compId).subscribe(response => {
      this.coupon = response;
      console.log(this.coupon);
    }, err => {
      alert("Error " + err.massage)
    })
    this.createCouponFlag = false;
  }
  getCoupon() {
    this.companyService.getCoupon(this.coupId).subscribe(response => {
      this.coupon = response;

      console.log(this.coupon);

    }, err => {
      alert("Error " + err.massage)
    }
    )

    this.oneCouponFlag= true;
    this.getCuponFlag = false;
  }
  getAllCoupons() {

    this.companyService.getAllCoupons(this.compId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
    }, err => {
      alert("Error " + err.massage)
    })
   this.allFalse();
    this.couponArrFlag = true;

  }
  deleteCouponById() {
    this.companyService.delete(this.coupId).subscribe(response => {
      console.log(response);
      this.coupons = response;
    }, err => {
      alert("Error " + err.massage)
    }
    )
    this.coupId = 0;
    this.deleteCouponFlag = false;
    this.couponArrFlag = true;
  }
  deleteAllCoupons() {
    this.companyService.deleteAll(this.compId).subscribe(response => {
      console.log(response);
      alert('Coupons Deleted')
    }, err => {
      alert("Error " + err.massage)
    }
    )
   this.allFalse();
  }

  updateCopon() {
    this.companyService.updateCoupon(this.coupon).subscribe(
      response => {
        this.coupon = response;
        console.log(this.coupon);
      }, err => {
        alert("Error " + err.massage)
      }
    )
    this.allFalse();
    this.oneCouponFlag = true;
  }
  findCpouponByType() {
    this.companyService.getCouponByType(this.couponType,this.compId).subscribe(
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
    this.companyService.getCouponByDate(this.date,this.compId).subscribe(
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
    this.companyService.getCouponByPrice(this.price,this.compId).subscribe(
      (response) => {
        this.coupons = response;
        console.log(this.coupons);
      }, err => {
        alert("Error " + err.massage)
      }

    )
    this.couponArrFlag = true;
  }
  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  ngOnInit() {
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
