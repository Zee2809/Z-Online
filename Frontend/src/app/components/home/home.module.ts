import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild([
      {path:'home',component:HomeComponent}
    ])

  ]
})
export class HomeModule { 

}
