import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustComponent } from './cust/cust.component';
import { CompComponent } from './comp/comp.component';
import { LeyoutComponent } from './leyout/leyout.component';
import { HomeComponent } from './home/home.component';
import { CustomerGuardService } from './services/customer-guard.service';
import { LoginComponent } from './login/login.component';
import { CompanyGuardService } from './services/company-guarde.service';
import { AdminGuardService } from './services/admin-guarde.service';
import { AdminFacadeComponent } from './admin-in/admin-facade.component';

const routes: Routes = [
  { path: "", component: LeyoutComponent },
  { path: "home", component: HomeComponent },
  { path: "cust", canActivate: [CustomerGuardService], component: CustComponent },
  { path: "comp", canActivate: [CompanyGuardService], component: CompComponent },
  { path: "login", component: LoginComponent },
  { path: "adminIn", canActivate: [AdminGuardService], component: AdminFacadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
