import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter<IProduct>();

  constructor() { }

  getStrikeThorughClasses(product: IProduct): string[] {
    let classes = [];
    
    if (product.discount > 0) classes.push('strikethrough');
    return classes;
  }

  getImageUrl(product: IProduct): string{
    if (!product) return '';
    return `assets/images/robot-parts/${product.imageName}`;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit(product);
  }
}
