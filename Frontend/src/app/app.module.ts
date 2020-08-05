import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, CarouselModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component'
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
    
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    AboutModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
