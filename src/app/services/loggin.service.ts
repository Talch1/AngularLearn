import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Credentials } from '../beans/Credentials';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }
  public inLoggedIn:boolean;

  ifExist(credentials:Credentials){
    if(credentials.type === 'customer'&& credentials.password ==='1' && credentials.userName ==='1'){
      this.inLoggedIn =true;
      return true;
    }
    if(credentials.type === 'company'&& credentials.password ==='2' && credentials.userName ==='2'){4
      this.inLoggedIn =true;
      return true;
    }
    if(credentials.type === 'admin'&& credentials.password ==='3' && credentials.userName ==='3'){
      this.inLoggedIn =true;
      return true;
    }
  }
}
