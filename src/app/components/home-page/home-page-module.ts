import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing-module';
import { RouterLinkActive } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    RouterLinkActive,
  ]
})
export class HomePageModule { }
