import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild([
      {path:'placeOrder',component:ShoppingCartComponent}
    ])
  ]
})
export class ShoppingCartModule { }
