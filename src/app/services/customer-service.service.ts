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

  public addCouponToCustomer({ custId, coupId }: { custId: string; coupId: string; }): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.baseURL + "addCouponToCust/" + custId + "/" + coupId, null);
  }
  public getAllCoupons(custId: string): Observable<Coupon[]> {

    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCoupons/" + custId);
  }

  public getCouponByType(type: string, custId: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCouponByType/" + custId + "/" + type);
  }
  public getCouponByDate(date: Date, custId: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCouponByDate/" + custId + "/" + date);
  }
  public getCouponByPrice(price: number, custId: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCouponByPrice/" + custId + "/" + price);
  }
}
