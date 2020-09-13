import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BannerComponent} from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import {Navigation1Component} from './navigation/navigation1/navigation1.component'
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"pages",component:PagesComponent,
  children:[{path:"navigation",loadChildren:()=> import("./navigation/navigation.module").then(m=>m.NavigationModule)}]},
{path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatIconModule,ReactiveFormsModule,CommonModule,BrowserModule],
  exports: [RouterModule],
  declarations: [HomeComponent, PagesComponent,BannerComponent, LoginComponent, RegisterComponent]
})
export class AppRoutingModule { }
