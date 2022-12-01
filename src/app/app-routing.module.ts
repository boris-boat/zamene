import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { OneAddComponent } from './pages/one-add/one-add.component';
import { AddslistComponent } from './pages/addslist/addslist.component';
import { OwnaddsComponent } from './pages/ownadds/ownadds.component';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: "home", component: HomeComponent },
{ path: "adds", component: AddslistComponent }, { path: "add", component: AddComponent }, { path: "ownadds", component: OwnaddsComponent },
{ path: "details/:id", component: OneAddComponent }, { path: "admin", component: AdminComponent }, { path: "", component: LoginComponent }, { path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
