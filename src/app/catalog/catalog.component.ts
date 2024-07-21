import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent { 
  products: IProduct[] = [];
  totalProducts: number = 0;
  filter: string = 'All';
  
  constructor(private cartService: CartService, private productService: ProductService) {
    this.cartService = cartService;
    this.productService = productService;       
  }

  ngOnInit() {
    this.getProductsFrmService();
  }

  getProductsFrmService() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.totalProducts = products.length;
    });
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }

  getFilteredProducts(): IProduct[]{
    if (this.filter === 'All') {
      return this.products;
    }else if(this.filter === 'Clearance') {
      return this.products.filter((product) => product != null && product.discount > 0);
    }
    else {
      return this.products.filter((product) => product != null && product.category === this.filter);
    }
  }

}
