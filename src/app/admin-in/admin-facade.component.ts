import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../beans/User';
import { AdminService } from '../services/admin.service';
import { LogginService } from '../services/loggin.service';
import { Income } from '../beans/Income';


@Component({
  selector: 'app-admin-facade',
  templateUrl: './admin-facade.component.html',
  styleUrls: ['./admin-facade.component.css']
})
export class AdminFacadeComponent implements OnInit {

  constructor(private logginService: LogginService, private router: Router, private adminService: AdminService) { }
  user: User = new User();
  users: User[] = [];
  custId: number = 2010;
  compId: number = 201;
  incomes: Income[] = [];
  token:string;

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  createCustFlag = false;
  createCompFlag = false;
  deleteCustomerFlag = false;
  deleteCompanyFlag = false;
  updateCustomerFlag = false;
  updateCompanyFlag = false;
  getCompFlag = false;
  getCustFlag = false;
  incomsArrFlag = false;
  incomeNull = false;


  compArrFlag = false;
  oneCompFlag = false;
  custArrFlag = false;
  oneCustFlag = false;

  existIdOrName = false;
  existId = false;

  allFalse() {
    this.createCustFlag = false;
    this.createCompFlag = false;
    this.deleteCustomerFlag = false;
    this.deleteCompanyFlag = false;
    this.compArrFlag = false;
    this.oneCompFlag = false;
    this.custArrFlag = false;
    this.oneCustFlag = false;
    this.updateCustomerFlag = false;
    this.updateCompanyFlag = false;
    this.getCompFlag = false;
    this.getCustFlag = false;
    this.existIdOrName = false;
    this.existId = false;
    this.incomsArrFlag = false;
    this.incomeNull = false;
  }



  ngOnInit() {
    this.token = this.logginService.token;
    console.log(this.token);
  }

  public logout(): void {
    this.adminService.logout(this.token).subscribe();
    this.logginService.logout;
    this.router.navigate(['/login'])
  }

  //********************************************************************************************************************************* */
  createCustomer() {
    this.adminService.createCustomer(this.user,this.token).subscribe(response => {
      this.user = response;
      console.log(this.user);
      this.allFalse();
      this.oneCustFlag = true;
    }, err => {
      this.allFalse();
      this.existIdOrName = true
    })
  }
  createCompany() {
    this.adminService.createCompany(this.user).subscribe(response => {
      this.user = response;
      console.log(this.user);
      this.allFalse();
      this.oneCompFlag = true;
    }, err => {
      this.allFalse();
      this.existIdOrName = true
    })

  }
  deleteCustomerById() {
    this.adminService.deleteCustomer(this.custId,this.token).subscribe(response => {
      this.users = response;
      console.log(this.users);
      this.allFalse();
      this.custArrFlag = true;
      if (response == null) {
        this.allFalse();
        this.existId = true;
      }
    }, err => {
      this.allFalse();
      this.existId = true;
    })

  }

  deleteCompanyById() {
    this.adminService.deleteCompany(this.compId).subscribe(response => {
      this.users = response;
      console.log(this.users);
      this.allFalse();
      this.compArrFlag = true;
      if (response == null) {
        this.allFalse();
        this.existId = true;
      }
    }, err => {
      this.allFalse();
      this.existId = true;
    })

  }
  updateCustomer() {
    this.adminService.updateCustomer(this.custId, this.user).subscribe(response => {
      this.user = response;
      console.log(this.user);
      this.user.id = this.custId;
    }, err => {
      this.allFalse();
      this.existId = true;
    })
    this.allFalse();
    this.oneCustFlag = true;
  }
  updateCompany() {
    this.adminService.updateCompany(this.compId, this.user).subscribe(response => {
      this.user = response;
      console.log(this.user);
      this.user.id = this.compId;
      this.allFalse();
      this.oneCompFlag = true;
    }, err => {
      this.allFalse();
      this.existId = true;
    })
  }

  getCustomer() {
    this.adminService.getCustomer(this.custId).subscribe(response => {
      this.user = response;
      console.log(this.user);
      this.user.id = this.custId;
      this.allFalse();
      this.oneCustFlag = true;
    }, err => {
      this.allFalse();
      this.existId = true;
    })

  }

  getCompany() {
    this.adminService.getCompany(this.compId).subscribe(response => {
      this.user = response;
      console.log(this.user);
      this.user.id = this.compId;
      this.allFalse();
      this.oneCompFlag = true;
    }, err => {
      this.allFalse();
      this.existId = true;
    })

  }

  getAllCustomers() {
    this.adminService.getAllCustomers().subscribe(response => {
      this.users = response;
      console.log(this.users);
      this.allFalse();
      this.custArrFlag = true;
    }, err => {
      alert("Error " + err.massage)
    })

  }
  getAllCompanys() {
    this.adminService.getAllCompanys().subscribe(response => {
      this.users = response;
      console.log(this.users);
      this.allFalse();
      this.compArrFlag = true;
    }, err => {
      alert("Error " + err.massage)
    })

  }
  getAllIncome() {
    this.adminService.getAllIncomes().subscribe(response => {
      this.incomes = response;
      console.log(this.incomes);
      this.allFalse();
      this.incomsArrFlag = true;
      if (this.incomes.length == 0) {
        this.allFalse();
        this.incomeNull = true;
      }
    }, err => {
      alert("Error " + err.massage)
    })
  }

  getCompIncomes() {
    this.adminService.getCompIncomes().subscribe(response => {
      this.incomes = response;
      console.log(this.incomes);
      this.allFalse();
      this.incomsArrFlag = true;
      if (this.incomes.length == 0) {
        this.allFalse();
        this.incomeNull = true;
      }
    }, err => {
      console.log(err)
      alert("Error " + err.massage)
    })
  }


  //***************************************************************************************************************************** */
  custCreateOpen() {
    this.allFalse();
    this.createCustFlag = true;
    this.user.id = 0;
    this.user.userName = "";
    this.user.password = ""
    this.user.email = ""
  }
  compCreateOpen() {
    this.allFalse();
    this.createCompFlag = true;
    this.user.id = 0;
    this.user.userName = "";
    this.user.password = ""
    this.user.email = ""
  }
  custDeleteOpen() {
    this.allFalse();
    this.deleteCustomerFlag = true;
    this.custId = 0;
  }
  compDeleteOpen() {
    this.allFalse();
    this.deleteCompanyFlag = true;
    this.compId = 0;
  }
  custUpdateOpen() {
    this.allFalse();
    this.updateCustomerFlag = true;
    this.custId = 0;
    this.user.userName = "";
    this.user.password = ""
    this.user.email = null;
  }
  compUpdateOpen() {
    this.allFalse();
    this.updateCompanyFlag = true;
    this.compId = 0;
    this.user.userName = "";
    this.user.password = ""
    this.user.email = ""
  }
  getCastOpen() {
    this.allFalse();
    this.getCustFlag = true;
  }
  getCompOpen() {
    this.allFalse();
    this.getCompFlag = true;
  }
  getAllCastOpen() {
    this.allFalse();
  }
  getAllCompOpen() {
    this.allFalse();
  }
}
