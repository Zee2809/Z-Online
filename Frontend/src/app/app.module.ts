
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, CarouselModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component'
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { ShoppingCartModule } from './components/shopping-cart/shopping-cart.module';
import { ProductsModule } from './components/products/products.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ShoppingCartModule,
    ProductsModule 
   ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
