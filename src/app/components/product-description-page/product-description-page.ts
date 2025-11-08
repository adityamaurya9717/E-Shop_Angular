import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../service/http-service';
import { CartService } from '../service/CartService';
import { environment } from '../../environments/environment';
import {productById} from './SamplePdpProduct'

@Component({
  selector: 'app-product-description-page',
  standalone: false,
  templateUrl: './product-description-page.html',
  styleUrl: './product-description-page.scss',
})
export class ProductDescriptionPage implements OnInit, OnDestroy {

  productList: any[] = [];
  currentProduct: any = null;
  showCartPopup: boolean = false;
  mainImage: string = '';
  specEntries: any[] = [];

  constructor(private router: Router,
    private httpService: HttpService,
    private cartService: CartService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log('Product Description Page initialized');
    // read productId from query params and load detail
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];
      if (productId) {
        this.fetchProductDetail(productId);
      } else {
        // no productId -> show sample product
        this.currentProduct = productById;
        console.log("Using sample productById:", this.currentProduct);
        this.currentProduct.image = ["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"]
        this.mainImage = this.currentProduct.image;
        this.specEntries = this.buildSpecEntries(this.currentProduct);
      }
    });

    // also load related products for "Customers also viewed" section
   // this.fetchProducts();
  }

  ngOnDestroy(): void {

  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max) {
      // reached bottom -> load more
      this.fetchProducts();
    }
  }

  closeCartPopUp() {
    this.showCartPopup = false;
  }

  handleAddToCartEvent(event: any) {
    this.currentProduct = { ...event };
    this.showCartPopup = true;
    // optionally add to cart via service
    // this.cartService.addToCart(event);
  }

  selectMainImage(img:string){
    this.mainImage = this.getImageUrl(img);
  }

  private fetchProducts() {
    // Reuse same pattern as other listing components — POST to /api/products with filter
    const filter = {
      category: 'all',
      sortBy: 'popularity',
      pageNo: 1,
      limit: 20
    };
    const url = '/api/products';

    // If the backend isn't available, fall back to a local stub (keeps UI functional)
    this.httpService.post(url, filter).subscribe((data: any) => {
      if (Array.isArray(data)) {
        // normalize image URLs from backend if they're relative
        const normalized = data.map((p: any) => ({
          ...p,
          image: this.getImageUrl(p.image),
          images: Array.isArray(p.images) ? p.images.map((i: any) => this.getImageUrl(i)) : undefined
        }));
        // append to list for infinite scroll
        this.productList = [...this.productList, ...normalized];
      }
    }, (err) => {
      // fallback sample data if API fails
      console.warn('Failed to load products, using fallback sample data', err);
      this.productList = this.productList.concat(productById);
    });
  }

  /**
   * Normalize an image URL so it can be safely used in <img src="...">.
   * - if url starts with http/https -> return as-is
   * - if url starts with // -> prefix with protocol
   * - if url starts with / -> prefix with environment.apiUrl
   * - otherwise prefix with environment.apiUrl + '/'
   */
  getImageUrl(url: any): string {
    if (!url) return '';
    const s = String(url).trim();
    if (s.match(/^https?:\/\//i)) return s;
    if (s.match(/^\/\//)) return window.location.protocol + s; // //cdn.example.com/...
    // relative path -> prefix apiUrl
    const base = (environment && environment.apiUrl) ? environment.apiUrl.replace(/\/$/, '') : '';
    if (s.startsWith('/')) return base + s;
    return base ? base + '/' + s : s;
  }

  private fetchProductDetail(productId:any){
    // try GET /api/products/:id then fallback
    const url = '/api/products/' + productId;
    this.httpService.get(url).subscribe((data:any)=>{
      if(data){
        this.currentProduct = data;
        this.mainImage = data.image || (data.images && data.images[0]) || '';
        this.specEntries = this.buildSpecEntries(this.currentProduct);
      }
    }, err=>{
      console.warn('Failed to load product detail, using fallback', err);
      // try to find in fetched list
      const found = this.productList.find(p=>p.productId == productId);
      if(found){
        this.currentProduct = found;
        this.mainImage = found.image;
        this.specEntries = this.buildSpecEntries(this.currentProduct);
      } else {
        this.currentProduct = productById;
        console.log("Using sample productById:", this.currentProduct);
        this.mainImage = this.currentProduct.image;
        this.specEntries = this.buildSpecEntries(this.currentProduct);
      }
    });
  }

  private buildSpecEntries(prod:any){
    const specs = prod && prod.specs ? prod.specs : {};
    return Object.keys(specs).map(k=>({k:k, v: specs[k]}));
  }

}
