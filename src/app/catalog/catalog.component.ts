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
  totalProducts: number = 0;
  filter: string = 'All';
  
  constructor(private cartService: CartService, private productService: ProductService) {
    this.cartService = cartService;
    this.productService = productService;       
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }

  getFilteredProducts(): IProduct[]{
    return this.productService.getProducts(this.filter);
  }

}
