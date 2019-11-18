import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../beans/Coupon';
import { Income } from '../beans/Income';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  constructor(private httpClient: HttpClient) { }
  private baseURL = "http://localhost:8080/company/";
  private Url2 = "http://localhost:8080/income/"

  public getAllCoupons(compId: number): Observable<Coupon[]> {

    return this.httpClient.get<Coupon[]>(this.baseURL + "getCoupons/" + compId);
  }

  public addCouponToCompany(compId: number, coupId: number): Observable<Coupon[]> {
    return this.httpClient.put<Coupon[]>(this.baseURL + "addCouponToComp/" + compId, coupId);
  }
  public addCoupon(coupon: Coupon, compId: number): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(this.baseURL + "createCoup/" + compId, coupon);
  }
  public getCoupon(userId: number, coupId: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCoupByID/" + userId + "/" + coupId);
  }
  public delete(userId: number, coupId: number): Observable<Coupon[]> {
    return this.httpClient.delete<Coupon[]>(this.baseURL + "deleteCouponById/" + userId + "/" + coupId);
  }
  public deleteAll(compId: number): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL + "deleteCoup/All/" + compId);
  }
  public updateCoupon(coupon: Coupon, userId: number): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.baseURL + "coupUpdate/" + userId, coupon);
  }
  public getCouponByType(type: string, userId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByType/" + userId + "/" + type);
  }
  public getCouponByDate(date: Date, userId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByDate/" + userId + "/" + date);
  }
  public getCouponByPrice(price: number, userId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByPrice/" + userId + "/" + price);
  }
  public getCustIncome(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.Url2 + "allCustIncome");
  }

}
