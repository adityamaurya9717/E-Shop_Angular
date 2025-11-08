import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http-service';
import { CartService } from '../service/CartService';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {

   cartCount = 3; // E

   constructor(private httpService: HttpService,private cartService:CartService) {

   }
  ngOnInit(): void {
      this.fetchCartCount();
      this.cartService.cartItems$.subscribe((items:any)=>{
         this.cartCount = items?.length || 0;
      });
  }


   private fetchCartCount() {
     const url = "/api/cart/count";
      this.httpService.get(url).
         subscribe((data: any) => {
            this.cartCount = data.count;
      });
   }

}
