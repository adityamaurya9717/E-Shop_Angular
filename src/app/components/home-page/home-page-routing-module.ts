import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page';
import { Shop } from '../shop/shop';
import { ShowProductLayout } from '../show-product-layout/show-product-layout';
import { CartPage } from '../cart-layout/cart-page/cart-page';
import { ProductDescriptionPage } from '../product-description-page/product-description-page';

const routes: Routes = [
  {
    path: '', component: HomePage,
    children: [
      {
        path: 'shop', component: ShowProductLayout
      }
      ,{
        path: 'cart', component: CartPage
      }
      ,{
        path:'pdp',component:ProductDescriptionPage
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
