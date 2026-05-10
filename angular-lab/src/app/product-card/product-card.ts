import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  description: string;
  emoji: string;
}

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() addedToCart = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addedToCart.emit(this.product);
  }
}
