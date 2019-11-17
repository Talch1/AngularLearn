import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import { User } from '../beans/User';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogginService {
  [x: string]: any;

  constructor(private httpClient: HttpClient) { }
  public inLoggedIn: boolean;
  public type: string;
  public user: User;

  public logout(): void {
    this.inLoggedIn = false;

  }
  public auth(user: User): Observable<any> {
    console.log(user);
    return this.httpClient.post("http://localhost:8080/login/logging" + "/" + user.userName + "/" + user.password + "/" + user.role, {},
      { observe: 'response', responseType: 'text' }
    );

  }

}