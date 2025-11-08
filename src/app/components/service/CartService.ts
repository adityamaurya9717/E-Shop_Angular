import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "../../service/http-service";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CartService implements OnInit {


    private cartItems:BehaviorSubject<any> = new BehaviorSubject<any>([]);
    cartItems$ = this.cartItems.asObservable();
    

    constructor(private http:HttpService){

    }
    ngOnInit(): void {
    
    }

    addToCart(product: any){
        console.log("Current cart items before adding:", this.cartItems.getValue());
         this.cartItems.next([...this.cartItems.getValue(), product]);
                 console.log("Adding to cart:", product);

    }

    removeFromCart(productId: string){
       const currentCurt = this.cartItems.getValue();       
       const updatedCart = currentCurt.filter((item: any) => item.id !== productId);
        this.cartItems.next(updatedCart)
        console.log("Removing from cart:", productId);
    }

    clearCart(){
        console.log("Clearing cart");
    }

    getCartDetails(){
        const url = "/api/cart/details";
        return this.http.get(url);
    }

    getTotalCartItems(){  
        return this.cartItems.getValue()?.length || 0;
    }




}