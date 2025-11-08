import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Showuser } from './show-user/showuser/showuser';
import { Adduser } from './add-user/adduser/adduser';
import { authGuard } from '../../auth-guard';

const routes: Routes = [
  {path :'',component:Showuser,canActivate:[authGuard]},
  {path:'adduser',component:Adduser,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
