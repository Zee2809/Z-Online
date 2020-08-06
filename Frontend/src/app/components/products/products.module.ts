import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductsComponent } from './products.component';
import { CropJerseyComponent } from './crop-jersey/crop-jersey.component';
import { SweatersComponent } from './sweaters/sweaters.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent,HoodiesComponent,TShirtsComponent,SweatersComponent,CropJerseyComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild([
      {path:'products',component:ProductsComponent},
      {path:'tshirts',component:TShirtsComponent}
    ]),
  ]
})
export class ProductsModule { }
