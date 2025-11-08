import { Component, HostListener, OnInit } from '@angular/core';
import { HttpService } from '../../service/http-service';
import { CartService } from '../service/CartService';

@Component({
  selector: 'app-show-product-layout',
  standalone: false,
  templateUrl: './show-product-layout.html',
  styleUrl: './show-product-layout.scss',
})
export class ShowProductLayout implements OnInit {


  currentProduct: any = null;

  showCartPopup: boolean = false;


  constructor(private httpService: HttpService,
    private cartService:CartService
  ) {

  }


  ngOnInit(): void {

  }


  productList = [];

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    console.log("scrolling....");
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max) {
      console.log("you are at bottom of the page");
      this.fetchProducts();
    }

  }

closeCartPopUp(){
    this.showCartPopup = false;
}

  handleAddToCartEvent(event:any){
    console.log("Received add to cart event:", event);
    this.currentProduct = {...event}
    this.showCartPopup = true;
    //this.cartService.addToCart(event);
  }

  private fetchProducts() {

    const filter = {
      category: 'all',
      sortBy: 'popularity',
      pageNo: 1,
      limit: 20
    };
    const url = "/api/products";

    this.httpService.post(url, filter).subscribe((data: any) => {
      this.productList = data;
    }
    );
  }


  public productDetail = [

    {
      productId: "1",
      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
      productId: "2",

      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
      productId: "3",

      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
      productId: "4",
      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
      productId: "5",
      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    }, {
      productId: "6",
      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
      productId: "7",
      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    }, {
      productId: "8",
      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product description.",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    }
  ]




}
