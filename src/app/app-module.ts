import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Login } from './public/login/login';
import { UserRegisterComponent } from './public/user-register-component/user-register-component';
import { HomePage } from './components/home-page/home-page';
import { Navbar } from './components/navbar/navbar';
import { Shop } from './components/shop/shop';
import { ShowProductLayout } from './components/show-product-layout/show-product-layout';
import { Product } from './components/show-product-layout/product/product';
import { CartPage } from './components/cart-layout/cart-page/cart-page';
import { tokenFilterInterceptor } from './token-filter-interceptor';
import { ProductDescriptionPage } from './components/product-description-page/product-description-page';

@NgModule({
  declarations: [
    App,
    Login,
    UserRegisterComponent,
    HomePage,
    Navbar,
    Shop,
    ShowProductLayout,
    Product,
    CartPage,
    ProductDescriptionPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
