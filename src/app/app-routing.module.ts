import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { CustComponent } from './cust/cust.component';
import { CompComponent } from './comp/comp.component';
import { LeyoutComponent } from './leyout/leyout.component';
import { HomeComponent } from './home/home.component';
import { CustomerGuardService } from './services/customer-guard.service';
import { LoginComponent } from './login/login.component';
import { CompanyGuardService } from './services/company-guarde.service';
import { AdminGuardService } from './services/admin-guarde.service';

const routes: Routes = [
{path : "",component:LeyoutComponent},
{path : "home",component:HomeComponent},
{path : "admin",canActivate:[AdminGuardService],component:AdminComponent},
{path : "cust",canActivate:[CustomerGuardService], component:CustComponent},
{path : "comp",canActivate:[CompanyGuardService],component:CompComponent},
{path : "login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
