import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company-service';

import { Company } from '../beans/Company';
import { AdminService } from '../services/admin.service';
import { Customer } from '../beans/Customer';

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

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
} 

  CreateCustFlag = false;
  CreateCompFlag = false;
  DeleteCustomerFlag = false;
  DeleteCompanyFlag = false;
  UpdateCustomerFlag = false;
  UpdateCompanyFlag = false;
  GetCompFlag = false;
  GetCustFlag = false;


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
    this.GetCompFlag = false;
    this.GetCustFlag = false;
  }



  ngOnInit() {
  }

  public logout(): void {
    this.logginService.logout;
    this.router.navigate(['/login'])
  }

  //********************************************************************************************************************************* */
  createCustomer() {
    this.adminService.createCustomer(this.customer).subscribe(response => {
      this.customers = response;
      console.log(this.customers);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CustArrFlag = true;

  }
  createCompany() {
    this.adminService.createCompany(this.company).subscribe(response => {
      this.companys = response;
      console.log(this.companys);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CompArrFlag = true;
  }
  deleteCustomerById() {
    this.adminService.deleteCustomer(this.custId).subscribe(response => {
      this.customers = response;
      console.log(this.customers);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CustArrFlag = true;
  }

  deleteCompanyById() {
    this.adminService.deleteCompany(this.compId).subscribe(response => {
      this.companys = response;
      console.log(this.companys);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CompArrFlag = true;
  }
  updateCustomer() {
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
  updateCompany() {
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
  getCompany(){
    this.adminService.getCompany(this.compId).subscribe(response => {
      this.company = response;
      console.log(this.company);
      this.company.id = this.compId;
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.OneCompFlag = true;
  }
  
  getCustomer(){
    this.adminService.getCustomer(this.custId).subscribe(response => {
      this.customer = response;
      console.log(this.customer);
      this.customer.id = this.custId;
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.OneCustFlag = true;
  }
  
  getAllCustomers() {
    this.adminService.getAllCustomers().subscribe(response => {
      this.customers = response;
      console.log(this.customers);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CustArrFlag = true;
  }
  getAllCompanys() {
    this.adminService.getAllCompanys().subscribe(response => {
      this.companys = response;
      console.log(this.companys);
    }, err => {
      alert("Error " + err.massage)
    })
    this.allFalse();
    this.CompArrFlag = true;
  }
  
//***************************************************************************************************************************** */
  custCreateOpen() {
    this.allFalse();
    this.CreateCustFlag = true;
  }
  compCreateOpen() {
    this.allFalse();
    this.CreateCompFlag = true;
  }
  custDeleteOpen() {
    this.allFalse();
    this.DeleteCustomerFlag = true;
  }
  compDeleteOpen() {
    this.allFalse();
    this.DeleteCompanyFlag = true;
  }
  custUpdateOpen() {
    this.allFalse();
    this.UpdateCustomerFlag = true;
  }
  compUpdateOpen() {
    this.allFalse();
    this.UpdateCompanyFlag = true;
  }
  getCastOpen(){
    this.allFalse();
    this.GetCustFlag = true;
  }
  getCompOpen(){
    this.allFalse();
    this.GetCompFlag = true;
  }
  getAllCastOpen(){
    this.allFalse();
  }
  getAllCompOpen(){
    this.allFalse();
  }
}
