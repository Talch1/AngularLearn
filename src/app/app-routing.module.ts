import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { CustComponent } from './cust/cust.component';
import { CompComponent } from './comp/comp.component';
import { LeyoutComponent } from './leyout/leyout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path : "",component:LeyoutComponent},
{path : "home",component:HomeComponent},
{path : "admin",component:AdminComponent},
{path : "cust",component:CustComponent},
{path : "comp",component:CompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
