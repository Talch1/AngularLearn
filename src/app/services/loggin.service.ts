import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import { User } from '../beans/User';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogginService {
  [x: string]: any;

  constructor(private httpClient:HttpClient){ }
  public inLoggedIn:boolean;
  public type:string;
  public user:User;

  public logout(): void {
    this.inLoggedIn = false;
    this.type = "";

  }
  public auth(user : User):Observable <boolean>{
    console.log(user);
    this.type = user.role;
    return this.httpClient.post<boolean>("http://localhost:8080/login/logging",user
    );

  }
  }