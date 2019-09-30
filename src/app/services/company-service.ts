import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Coupon } from '../beans/Coupon';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  constructor(private httpClient: HttpClient) { }
  baseURL = "http://localhost:8080/company/";

  public getAllCoupons(compId: string): Observable<Coupon[]> {

    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCoupons/" + compId);
  }
  public addCouponToCompany(compId: string, coupId: string): Observable<string> {
    return this.httpClient.post<string>(this.baseURL + "addCouponToComp/" + compId + "/" + coupId, null);
  }
  public addCoupon(coupon: Coupon, compId: string): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(this.baseURL + "createCoupon/" + compId, coupon);
  }
  public getCoupon(coupId: string): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCouponByID/" + coupId);
  }
  public delete(coupId: string): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL + "deleteCoupon/" + coupId);
  }
  public deleteAll(compId: string): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL + "deleteCoupon/All/" + compId);
  }
  public updateCoupon(coupon: Coupon,coupId:string) : Observable<Coupon> {
return this.httpClient.put<Coupon>(this.baseURL + "couponUpdate/"+ coupId,coupon);
  }





}
