import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../beans/Company';
import { Customer } from '../beans/Customet';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl ="http://localhost:8080/admin/"

  constructor(private httpClient: HttpClient) { }

 public createCustomer(customer:Customer): Observable<Customer[]>{
  return this.httpClient.post<Customer[]>(this.baseUrl +"customerCreate",customer );
 }

  public createCompany(company: Company ): Observable<Company[]> {
    return this.httpClient.post<Company[]>(this.baseUrl + "compnyCreate/",company );
  }
  public deleteCustomer(custId: number ): Observable<Customer[]> {
    return this.httpClient.delete<Customer[]>(this.baseUrl + "deleteCust/"+custId );
  }
  public deleteCompany(compId: number ): Observable<Company[]> {
    return this.httpClient.delete<Company[]>(this.baseUrl + "deleteComp/"+compId );
  }
  public updateCustomer(custId: number,customer:Customer ): Observable<Customer> {
    return this.httpClient.put<Customer>(this.baseUrl + "custUpdate/"+custId,customer );
  }
  public updateCompany(compId: number ,company:Company): Observable<Company> {
    return this.httpClient.put<Company>(this.baseUrl + "companyUpdate/"+compId,company );
  }
  public getCustomer(custId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl + "getCustByID/"+custId );
  }
  public getCompany(compId: number): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl + "getCompByID/"+compId);
  }
  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl + "getCustomers/");
  }
  public getAllCompanys(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseUrl + "getCompanys/");
  }
}
