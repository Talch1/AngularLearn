import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import { Credentials } from '../beans/Credentials';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor(private httpClient:HttpClient){ }
  public inLoggedIn:boolean;
  public type:string;

  public logout(): void {
    this.inLoggedIn = false;
    this.type = "";

  }
  public auth(credentials : Credentials):Observable <object>{
    console.log(credentials);
    return this.httpClient.post("http://localhost:8080/login/logging",credentials);
    

    
    
  }

  /* ifExistDemo(credentials:Credentials){
    if(credentials.type === 'customer'&& credentials.password ==='1' && credentials.userName ==='1'){
      this.inLoggedIn =true;
      this.type = credentials.type;
      return true;
    }
    if(credentials.type === 'company'&& credentials.password ==='2' && credentials.userName ==='2'){
      this.inLoggedIn =true;
      this.type = credentials.type;
      return true;
    }
    if(credentials.type === 'admin'&& credentials.password ==='3' && credentials.userName ==='3'){
      this.inLoggedIn =true;
      this.type = credentials.type;
      return true;
    } */
 // }
}
