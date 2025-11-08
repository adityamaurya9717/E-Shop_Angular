import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {

  @Input("productDetail") productDetail: any;
  product: any = {};

  @Output() addToCartEvent = new EventEmitter<any>();

  constructor(private router:Router) {
  }



  ngOnInit(): void {

    console.log("Product Detail Input:", this.productDetail);

    this.product = {
      productId : this.productDetail.productId,
      name: this.productDetail.name,
      price: this.productDetail.price,
      description: this.productDetail.description,
      image: this.productDetail.image
    }

  }

  addToCart(product:any) {
    console.log("Adding to cart:", this.product);
    this.addToCartEvent.emit(product);
  }

  goToPdpPage(productId:any){
    console.log("Navigating to PDP page for productId:", productId);
    // Navigation logic to product description page can be added here
    this.router.navigate(['homepage','pdp'],{queryParams:{productId:productId}});

  }




}
