import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../beans/Coupon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient: HttpClient) { }
  baseURL = "http://localhost:8080/customer/";
   

  public seeAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "seeAllCoupons");
  }
  public addCouponToCustomer( token: string, coupId: number): Observable<Coupon[]> {
    return this.httpClient.put<Coupon[]>(this.baseURL + "addCouponToCust/"+ coupId,{},{headers:{token}});
  }
  public getAllCoupons(token: string): Observable<Coupon[]> {

    return this.httpClient.get<Coupon[]>(this.baseURL + "getCustCoup/", {headers: {token}});
  }
  public getCouponById( token: string,coupId: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCustCoupByID/" +  "/" + coupId,{headers: {token}});
  }
  public getCouponByType(type: string, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findCustCoupByType/" + type,{headers: {token}});
  }
  public getCouponByDate(date: Date, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findCustCoupByDate/" + date,{headers: {token}});
  }
  public getCouponByPrice(price: number, token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findCustCoupByPrice/"  + price,{headers: {token}});
  }
  public logout(token:string):Observable<any>{
    return this.httpClient.post(this.baseURL+"logout", {},{headers: {token}});
  }
}
