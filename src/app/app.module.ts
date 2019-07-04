import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CompComponent } from './comp/comp.component';
import { CustComponent } from './cust/cust.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';

const appRoutes : Routes = [
{path: '', component: AppComponent },
{path: 'admin', component :AdminComponent},
{path: 'comp', component :CompComponent},
{path: 'cust', component: CustComponent},
{path: '**', component:NotFoundComponent}

] 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HelloComponent,
    HomeComponent,
    AdminComponent,
    CompComponent,
    CustComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
