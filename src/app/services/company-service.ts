import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Coupon } from '../beans/Coupon';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  constructor(private httpClient: HttpClient) { }
  baseURL = "http://localhost:8080/company/";

  public getAllCoupons(compId: number): Observable<Coupon[]> {

    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCoupons/" + compId);  }
  public addCouponToCompany(compId: number, coupId: number): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.baseURL + "addCouponToComp/" + compId + "/" + coupId, null);
  }
  public addCoupon(coupon: Coupon, compId: number): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.baseURL + "createCoupon/" + compId, coupon);
  }
  public getCoupon(coupId: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCouponByID/" + coupId);
  }
  public delete(coupId: number): Observable<Coupon[]> {
    return this.httpClient.delete<Coupon[]>(this.baseURL + "deleteCoupon/" + coupId);
  }
  public deleteAll(compId: number): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL + "deleteCoupon/All/" + compId);
  }
  public updateCoupon(coupon: Coupon,coupId:number) : Observable<Coupon> {
return this.httpClient.put<Coupon>(this.baseURL + "couponUpdate/"+ coupId,coupon);
  }
  public getCouponByType(type: string,compId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCouponByType/"+compId +"/"+ type);
  }
  public getCouponByDate(date: Date,compId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCouponByDate/"+compId +"/" + date);
  }
  public getCouponByPrice(price: number,compId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCouponByPrice/"+compId +"/" + price);
  }





}
