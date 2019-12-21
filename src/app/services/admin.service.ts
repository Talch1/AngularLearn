import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../beans/User';
import { Income } from '../beans/Income';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl ="http://localhost:8080/admin/"
  Url2 = "http://localhost:8080/income/"

  constructor(private httpClient: HttpClient) { }

 public createCustomer(customer:User,token:string): Observable<User>{
  return this.httpClient.post<User>(this.baseUrl +"customerCreate",customer,{headers: {token}});
 }
 public deleteCustomer(custId: number ,token:string): Observable<User[]> {
  return this.httpClient.delete<User[]>(this.baseUrl + "deleteCust/"+custId,{headers: {token}} );
}
  public createCompany(company: User,token:string ): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + "compnyCreate",company,{headers: {token}});
  }
  public deleteCompany(compId: number ,token:string): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.baseUrl + "deleteComp/"+compId ,{headers: {token}});
  }
  public updateCustomer(customer:User,token:string ): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + "custUpdate/"+customer.id,customer,{headers: {token}} );
  }
  public updateCompany(company:User,token:string): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + "companyUpdate/"+company.id,company,{headers: {token}});
  }
  public getCustomer(custId: number,token:string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "getCustByID/"+custId ,{headers: {token}});
  }
  public getCompany(compId: number,token:string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "getCompByID/"+compId,{headers: {token}});
  }
  public getAllCustomers(token:string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "getCustomers",{headers: {token}});
  }
  public getAllCompanys(token:string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "getCompanys",{headers: {token}});

  }
  public getAllIncomes(token:string): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.Url2 + "anllIncome",{headers: {token}});
}
public getCustIncomes(token:string,custId:number): Observable<Income[]> {
  return this.httpClient.get<Income[]>(this.Url2 + "allCustIncome/"+ custId,{headers: {token}});
}

public logout(token:string):Observable<any>{
  return this.httpClient.post(this.baseUrl+"logout",{},{headers: {token}});
}
}