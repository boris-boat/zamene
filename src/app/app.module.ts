import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddslistComponent } from './pages/addslist/addslist.component';
import { OneAddComponent } from './pages/one-add/one-add.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnaddsComponent } from './pages/ownadds/ownadds.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SingleUserComponent } from './pages/admin/single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    NavbarComponent,
    AddslistComponent,
    OneAddComponent,
    LoginComponent,
    OwnaddsComponent,
    AdminComponent,
    SingleUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
