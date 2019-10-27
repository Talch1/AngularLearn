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

  public getAllCoupons(): Observable<Coupon[]> {

    return this.httpClient.get<Coupon[]>(this.baseURL + "getCoupons" );  }

  public addCouponToCompany(userId: number, coupId: number): Observable<Coupon[]> {
    return this.httpClient.put<Coupon[]>(this.baseURL + "addCouponToComp/" + userId , coupId);
  }
  public addCoupon(coupon: Coupon): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(this.baseURL + "createCoup", coupon);
  }
  public getCoupon(coupId: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseURL + "getCoupByID/" + coupId);
  }
  public delete(coupId: number): Observable<Coupon[]> {
    return this.httpClient.delete<Coupon[]>(this.baseURL + "deleteCoup/" + coupId);
  }
  public deleteAll(compId: number): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL + "deleteCoup/All");
  }
  public updateCoupon(coupon: Coupon) : Observable<Coupon> {
return this.httpClient.put<Coupon>(this.baseURL + "coupUpdate",coupon);
  }
  public getCouponByType(type: string,compId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCoupByType/"+ type);
  }
  public getCouponByDate(date: Date,compId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCoupByDate/"+ date);
  }
  public getCouponByPrice(price: number,compId: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCoupByPrice/" + price);
  }





}
