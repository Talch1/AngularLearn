import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company-service';
import { Customer } from '../beans/Customet';
import { Company } from '../beans/Company';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-facade',
  templateUrl: './admin-facade.component.html',
  styleUrls: ['./admin-facade.component.css']
})
export class AdminFacadeComponent implements OnInit {

  constructor(private logginService: LogginService, private router: Router, private adminService : AdminService) { }
  customer: Customer = new Customer();
  company: Company = new Company();
  customers: Customer[] = [];
  companys: Company[] = [];

  CreateCustFlag = false;
  CreateCompFlag = false;

  allFalse() {
    this.CreateCustFlag = false;
    this.CreateCompFlag = false;
  }



  ngOnInit() {
  }

  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  CreateCustomer(){
    this.adminService.createCustomer(this.customer).subscribe(response => {
      this.customer = response;
      console.log(this.customer);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    

  }

  CreateCompany(){
    this.adminService.createCompany(this.customer).subscribe(response => {
      this.company = response;
      console.log(this.company);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    

  }
  CustCreateOpen() {
    this.allFalse() ;
    this.CreateCustFlag = true;
  }
  CompCreateOpen() {
    this.allFalse() ;
    this.CreateCompFlag = true;
  }

}
