import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing-module';
import { Showuser } from './show-user/showuser/showuser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Adduser } from './add-user/adduser/adduser';


@NgModule({
  declarations: [
    Showuser,
    Adduser
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModuleModule { }
