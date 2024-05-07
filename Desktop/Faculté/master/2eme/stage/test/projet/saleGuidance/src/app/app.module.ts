
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { CountryComponent } from './country/country.component';
import { DrawerComponent } from './drawer/drawer.component';
import { HomecComponent } from './homec/homec.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DrawerComponent,
    HomecComponent,
    CountryComponent,
    PagenotfoundComponent,
    EntrepriseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDrawerModule,
    DxToolbarModule,
    DxListModule,
    DxRadioGroupModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
