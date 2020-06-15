import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component'
import { FemalesComponent } from './components/items/females/females.component';
import { MalesComponent } from './components/items/males/males.component';
import { AllItemsComponent } from './components/items/all-items/all-items.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FemalesComponent,
    MalesComponent,
    AllItemsComponent,
    CarouselComponent,
    NavbarComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
