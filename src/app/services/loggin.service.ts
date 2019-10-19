import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import { Credentials } from '../beans/Credentials';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogginService {
  [x: string]: any;

  constructor(private httpClient:HttpClient){ }
  public inLoggedIn:boolean;
  public type:string;
  public credentionals:Credentials;

  public logout(): void {
    this.inLoggedIn = false;
    this.type = "";

  }
  public auth(credentials : Credentials):Observable <boolean>{
    console.log(credentials);
    this.type = credentials.type;
    
    return this.httpClient.post<boolean>("http://localhost:8080/login/logging",credentials);

  }
  }