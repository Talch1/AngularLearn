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

 public createCustomer(customer:User): Observable<User>{
  return this.httpClient.post<User>(this.baseUrl +"customerCreate",customer );
 }

  public createCompany(company: User ): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + "compnyCreate/",company );
  }
  public deleteCustomer(custId: number ): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.baseUrl + "deleteCust/"+custId );
  }
  public deleteCompany(compId: number ): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.baseUrl + "deleteComp/"+compId );
  }
  public updateCustomer(custId: number,customer:User ): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + "custUpdate/"+custId,customer );
  }
  public updateCompany(compId: number ,company:User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + "companyUpdate/"+compId,company );
  }
  public getCustomer(custId: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "getCustByID/"+custId );
  }
  public getCompany(compId: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "getCompByID/"+compId);
  }
  public getAllCustomers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "getCustomers/");
  }
  public getAllCompanys(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "getCompanys/");

  }
  public getAllIncomes(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.Url2 + "allIncome");
}
public getCompIncomes(): Observable<Income[]> {
  return this.httpClient.get<Income[]>(this.Url2 + "allCompIncome");
}
}