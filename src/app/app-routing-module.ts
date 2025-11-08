import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './public/login/login';
import { UserRegisterComponent } from './public/user-register-component/user-register-component';

const routes: Routes = [
 {
  path:'',redirectTo : 'login', pathMatch: 'full'
 },

 { 
  path:'users',
  loadChildren : ()=> import('./modules/user-module/user-module-module').then(m => m.UserModuleModule)
 },
 { 
  path:'homepage',
  loadChildren : ()=> import('./components/home-page/home-page-module').then(m => m.HomePageModule)
 },
 { 
  path:'login', component : Login
 },
 { 
  path:'register', component : UserRegisterComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
