import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company-service';
import { Coupon } from '../beans/Coupon';

@Component({
  selector: 'app-company-facade',
  templateUrl: './company-facade.component.html',
  styleUrls: ['./company-facade.component.css']
})
export class CompanyFacadeComponent implements OnInit {

  constructor(private logginService: LogginService, private router: Router, private companyService: CompanyService) { }

  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }
  coupon: Coupon = new Coupon();
  coupons: Coupon[];
  massage: string;

  compId: number = 201;
  coupId: number;

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
  CouponArrFlag = false;
  OneCouponFlag = false;

  allFallse() {
    this.AddCouponOpenFlag = false;
    this.CreateCouponFlag = false;
    this.GetCuponFlag = false;
    this.DeleteCouponFlag = false;
    this.UpdateCoponFlag = false;
    this.CouponByTypeFlag = false;
    this.CouponByDateFlag = false;
    this.CouponByPriceFlag = false;
    this.CouponArrFlag = false;
    this.OneCouponFlag = false;
  }
  AddCouponToCompany() {

    // work but throw ERROR

    this.companyService.addCouponToCompany(this.compId, this.coupId).subscribe(response => {
      console.log(response);
    }, err => {
      alert("Error " + err.massage)
    })

    alert('This coupon added')
    this.AddCouponOpenFlag = false;
  }
  CreateThisCoupon() {

    this.OneCouponFlag = true;
    this.companyService.addCoupon(this.coupon, this.compId).subscribe(response => {
      this.coupon = response;
      console.log(this.coupon);
    }, err => {
      alert("Error " + err.massage)
    })
    this.CreateCouponFlag = false;
  }
  GetCoupon() {
    this.companyService.getCoupon(this.coupId).subscribe(response => {
      this.coupon = response;

      console.log(this.coupon);

    }, err => {
      alert("Error " + err.massage)
    }
    )

    this.OneCouponFlag = true;
    this.GetCuponFlag = false;
  }
  GetAllCoupons() {

    this.companyService.getAllCoupons(this.compId).subscribe(response => {
      this.coupons = response;
      console.log(this.coupons);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFallse();
    this.CouponArrFlag = true;

  }
  DeleteCouponById() {
    this.companyService.delete(this.coupId).subscribe(response => {
      console.log(response);
      this.coupons = response;
    }, err => {
      alert("Error " + err.massage)
    }
    )
    this.coupId = 0;
    this.DeleteCouponFlag = false;
    this.CouponArrFlag = true;
  }
  DeleteAllCoupons() {
    this.companyService.deleteAll(this.compId).subscribe(response => {
      console.log(response);
      alert('Coupons Deleted')
    }, err => {
      alert("Error " + err.massage)
    }
    )
    this.allFallse();
  }

  UpdateCopon() {
    this.companyService.updateCoupon(this.coupon, this.coupId).subscribe(
      response => {
        this.coupon = response;
        console.log(this.coupon);
        alert("Coupon Updated")
      }, err => {
        alert("Error " + err.massage)
      }
    )
    this.UpdateCoponFlag = false;
  }
  FindCpouponByType() {
    this.companyService.getCouponByType(this.couponType, this.compId).subscribe(
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
    this.companyService.getCouponByDate(this.date, this.compId).subscribe(
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
    this.companyService.getCouponByPrice(this.price, this.compId).subscribe(
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
  AddNewCouponOpen() {
    this.allFallse();
    this.CreateCouponFlag = true;
  }
  GetCoponByIDOpen() {
    this.allFallse();
    this.GetCuponFlag = true;
  }
  DeleteCoponByIDOpen() {
    this.allFallse();
    this.DeleteCouponFlag = true;

  }
  GetAllCouponsOPen() {
    this.allFallse();
  }
  DeleteAllCouponsOPen() {
    this.allFallse();
  }
  UpdateCoponOpen() {
    this.allFallse();
    this.UpdateCoponFlag = true;
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
