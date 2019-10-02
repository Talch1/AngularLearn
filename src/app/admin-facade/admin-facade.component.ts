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

  constructor(private logginService: LogginService, private router: Router, private adminService: AdminService) { }
  customer: Customer = new Customer();
  company: Company = new Company();
  customers: Customer[] = [];
  companys: Company[] = [];
  custId: number = 2010;
  compId: number = 201;

  CreateCustFlag = false;
  CreateCompFlag = false;
  DeleteCustomerFlag = false;
  DeleteCompanyFlag = false;
  UpdateCustomerFlag = false;
  UpdateCompanyFlag = false;

  CompArrFlag = false;
  OneCompFlag = false;
  CustArrFlag = false;
  OneCustFlag = false;


  allFalse() {
    this.CreateCustFlag = false;
    this.CreateCompFlag = false;
    this.DeleteCustomerFlag = false;
    this.DeleteCompanyFlag = false;
    this.CompArrFlag = false;
    this.OneCompFlag = false;
    this.CustArrFlag = false;
    this.OneCustFlag = false;
    this.UpdateCustomerFlag = false;
    this.UpdateCompanyFlag = false;
  }



  ngOnInit() {
  }

  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }
  CreateCustomer() {
    this.adminService.createCustomer(this.customer).subscribe(response => {
      this.customers = response;
      console.log(this.customers);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CustArrFlag = true;

  }
  CreateCompany() {
    this.adminService.createCompany(this.company).subscribe(response => {
      this.companys = response;
      console.log(this.companys);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CompArrFlag = true;
  }
  DeleteCustomerById() {
    this.adminService.deleteCustomer(this.custId).subscribe(response => {
      this.customers = response;
      console.log(this.customers);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CustArrFlag = true;
  }

  DeleteCompanyById() {
    this.adminService.deleteCompany(this.compId).subscribe(response => {
      this.companys = response;
      console.log(this.companys);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CompArrFlag = true;
  }
  UpdateCustomer() {
    this.adminService.updateCustomer(this.custId,this.customer).subscribe(response => {
      this.customer = response;
      console.log(this.customer);
      this.customer.id = this.custId;
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.OneCustFlag = true;
  }
  UpdateCompany() {
    this.adminService.updateCompany(this.compId,this.company).subscribe(response => {
      this.company = response;
      console.log(this.company);
      this.company.id = this.compId;
    }, err => {
      alert("Error " + err.massage)
    })

    this.allFalse();
    this.OneCompFlag = true;
  }
  

  CustCreateOpen() {
    this.allFalse();
    this.CreateCustFlag = true;
  }
  CompCreateOpen() {
    this.allFalse();
    this.CreateCompFlag = true;
  }
  CustDeleteOpen() {
    this.allFalse();
    this.DeleteCustomerFlag = true;
  }
  CompDeleteOpen() {
    this.allFalse();
    this.DeleteCompanyFlag = true;
  }
  CustUpdateOpen() {
    this.allFalse();
    this.UpdateCustomerFlag = true;
  }
  CompUpdateOpen() {
    this.allFalse();
    this.UpdateCompanyFlag = true;
  }

}
