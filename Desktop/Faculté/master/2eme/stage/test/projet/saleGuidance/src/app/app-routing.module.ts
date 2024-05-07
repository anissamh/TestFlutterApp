import { EntrepriseComponent } from './entreprise/entreprise.component';
import { CountryComponent } from './country/country.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrawerComponent } from './drawer/drawer.component';
import { HomecComponent } from './homec/homec.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
;

const routes: Routes = [

  //drawer
  {path:"drawer",component:DrawerComponent},
  //home
  {path:"home",component:HomecComponent},
  //dashboard
  {path:"dashboard",component:DashboardComponent},
  //pays
  {path:"country",component:CountryComponent},
  //entreprise
  {path:"entreprise",component:EntrepriseComponent},

  {path:"",redirectTo:"/dashboard",pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
