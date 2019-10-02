import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CompComponent } from './comp/comp.component';
import { CustComponent } from './cust/cust.component';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { LeyoutComponent } from './leyout/leyout.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminFacadeComponent } from './admin-facade/admin-facade.component';
import { CompanyFacadeComponent } from './company-facade/company-facade.component';
import { CustomerFacadeComponent } from './customer-facade/customer-facade.component'




const appRoutes: Routes = [
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    CompComponent,
    CustComponent,
    FooterComponent,
    LeyoutComponent,
    HomeComponent,
    AdminFacadeComponent,
    CompanyFacadeComponent,
    CustomerFacadeComponent,
 


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
