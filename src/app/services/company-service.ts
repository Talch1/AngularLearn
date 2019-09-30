import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Coupon } from '../beans/Coupon';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  

  constructor(private httpClient:HttpClient) {}
  baseURL= "http://localhost:8080/company/";

  public getAllCoupons(compId:string):Observable<Coupon[]>{

  return this.httpClient.get<Coupon[]>(this.baseURL + "getAllCoupons/"+compId);
  }
  public addCouponToCompany(compId:string,coupId:string):Observable<string>{    
  return this.httpClient.post<string>(this.baseURL + "addCouponToComp/"+compId+"/"+coupId,null);
  }
  public addCoupon(coupon:Coupon,compId:string):Observable<Coupon[]>{
    return this.httpClient.post<Coupon[]>(this.baseURL + "/createCoupon/201",coupon);
    }

  /* public getAllCompanysById(id:number):Observable<Company>
  {
    
  return  this.httpClient.get<Company>("http://localhost:8080/company/getByID"); */
  
  
  }
