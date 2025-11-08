import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../service/CartService';

@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage implements OnInit {

  @Input("currentProduct") set _currentProduct(value : any) {
    this.currentProduct = {...value};
    this.currentProduct["quantity"] = 1; // Reset quantity when a new product is set
    console.log("CartPage received currentProduct:", this.currentProduct);
  }
  currentProduct: any;

  get _currentProduct() {
    return this.currentProduct;
  }

  @Output() closeCartEvent = new EventEmitter<void>();


  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
      this.cartService.addToCart(this.currentProduct);
  }


  handleQuantity(type: any) {
    console.log("Handling quantity change event:", type);
    if(type === 'plus'){
      this.currentProduct["quantity"] = (this.currentProduct["quantity"] || 1) + 1;
      this.currentProduct["totalPrice"] = this.currentProduct.price * this.currentProduct["quantity"];
      console.log("Updated currentProduct after plus:", this.currentProduct);
    }
    else if(type === 'minus'){
      if(this.currentProduct["quantity"] > 1){
        this.currentProduct["quantity"] = this.currentProduct["quantity"] - 1;
        this.currentProduct["totalPrice"] = this.currentProduct.price * this.currentProduct["quantity"];
        console.log("Updated currentProduct after minus:", this.currentProduct);
      }
    }


  }

  onClosePopup() {
    this.closeCartEvent.emit();
  }

  

}
