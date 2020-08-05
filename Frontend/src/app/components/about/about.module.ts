import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild([
      {path:'about',component:AboutComponent}
    ])
  ]
})
export class AboutModule { }
