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

 public createCustomer(customer:Customer): Observable<Customer>{
  return this.httpClient.post<Customer>(this.baseUrl +"customerCreate",customer );
 }

  public createCompany(company: Company ): Observable<Company> {
    return this.httpClient.post<Company>(this.baseUrl + "compnyCreate/",company );
  }

  
}
