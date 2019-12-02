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
 
  public addCouponToCompany(token: string, coupId: number): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(this.baseURL + "addCouponToComp/" + token , coupId);
  }
  public addCoupon(coupon: Coupon, token: string): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(this.baseURL + "createCoup/" + token, coupon);
  }
  public getCoupon(token: string, coupId: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCoupByID/" + token + "/" + coupId);
  }
  public delete(token: string, coupId: number): Observable<Coupon[]> {
    return this.httpClient.delete<Coupon[]>(this.baseURL + "deleteCouponById/" + token + "/" + coupId);
  }
  public getAllCoupons(token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getCoupons/" + token);
  }
  public deleteAll(token: string): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL + "deleteCoup/All/" + token);
  }
  public updateCoupon(coupon: Coupon, token:string): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.baseURL + "coupUpdate/" + token, coupon);
  }
  public getCouponByType(type: string, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByType/" + token + "/" + type);
  }
  public getCouponByDate(date: Date, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByDate/" + token + "/" + date);
  }
  public getCouponByPrice(price: number, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByPrice/" + token + "/" + price);
  }
  public getCustIncome(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.Url2 + "allCustIncome");
  }

}
