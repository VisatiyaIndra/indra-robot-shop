import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent { 
  products: IProduct[] = [];
  totalProducts: number = 0;
  filter: string = '';
  
  constructor(private cartService: CartService, 
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
    this.cartService = cartService;
    this.productService = productService;       
  }

  ngOnInit() {
    this.getProductsFrmService();
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? "";
    })
  }

  getProductsFrmService() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.totalProducts = products.length;
    });
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    this.router.navigate(['cart']);
  }

  getFilteredProducts(): IProduct[]{
    if (this.filter === '') {
      return this.products;
    }else if(this.filter === 'Clearance') {
      return this.products.filter((product) => product != null && product.discount > 0);
    }
    else {
      return this.products.filter((product) => product != null && product.category === this.filter);
    }
  }

}
