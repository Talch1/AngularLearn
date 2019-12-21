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

  public seeAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "seeAllCoupons");
  }
  public addCouponToCompany(token: string, coupId: number): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(this.baseURL + "addCouponToComp", coupId, { headers: { token } });
  }
  public addCoupon(coupon: Coupon, token: string): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(this.baseURL + "createCoup/", coupon, { headers: { token } });
  }
  public getCoupon(token: string, coupId: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCoupByID/" + coupId, { headers: { token } });
  }
  public delete(token: string, coupId: number): Observable<Coupon[]> {
    return this.httpClient.delete<Coupon[]>(this.baseURL + "deleteCouponById/" + coupId, { headers: { token } });
  }
  public getAllCoupons(token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getCoupons/", { headers: { token } });
  }
  public deleteAll(token: string): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL + "deleteCoup/All/", { headers: { token } });
  }
  public updateCoupon(coupon: Coupon, token: string): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.baseURL + "coupUpdate/", coupon, { headers: { token } });
  }
  public getCouponByType(type: string, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByType/" + type, { headers: { token } });
  }
  public getCouponByDate(date: Date, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByDate/" + date, { headers: { token } });
  }
  public getCouponByPrice(price: number, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findUserCoupByPrice/" + price, { headers: { token } });
  }
  public getCompIncome(token: string): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.Url2 + "allCompIncome", { headers: { token } });
  }
  public logout(token: string): Observable<any> {
    return this.httpClient.post(this.baseURL + "logout", {}, { headers: { token } });
  }

}
