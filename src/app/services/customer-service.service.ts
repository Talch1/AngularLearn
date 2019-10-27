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

  public addCouponToCustomer( custId: number, coupId: number): Observable<Coupon[]> {
    return this.httpClient.put<Coupon[]>(this.baseURL + "addCouponToCust/"+ custId, coupId);
  }
  public getAllCoupons(custId: number): Observable<Coupon[]> {

    return this.httpClient.get<Coupon[]>(this.baseURL + "getCustCoup/" + custId);
  }
  public getCouponById( custId: number,coupId: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCustCoupByID/" + custId + "/" + coupId);
  }
  public getCouponByType(type: string, custId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findCustCoupByType/" + custId + "/" + type);
  }
  public getCouponByDate(date: Date, custId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "findCustCoupByDate/" + custId + "/" + date);
  }
  public getCouponByPrice(price: number, custId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCouponByPrice/" + custId + "/" + price);
  }
  public adminGetCouponById(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>("http://localhost:8080/customer/getCoupByID/" + id);
  }
}
