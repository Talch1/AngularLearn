import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../beans/Company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }

  public getAllCompanys():Observable<Company[]>
  {
    
  return  this.httpClient.get<Company[]>("http://localhost:8080/company/getCompanys");
  
  }
  public getAllCompanysById(id:number):Observable<Company>
  {
    
  return  this.httpClient.get<Company>("http://localhost:8080/company/getByID");
  
  }

}
