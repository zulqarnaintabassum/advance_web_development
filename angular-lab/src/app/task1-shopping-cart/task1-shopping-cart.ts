import { Component } from '@angular/core';
import { Product } from '../product-card/product-card';
import { cartCount, showToast } from '../app';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  emoji: string;
}

@Component({
  selector: 'app-task1-shopping-cart',
  standalone: false,
  templateUrl: './task1-shopping-cart.html',
  styleUrl: './task1-shopping-cart.css'
})
export class Task1ShoppingCartComponent {
  readonly allProducts: Product[] = [
    { name: 'Wireless Headphones', price: 79.99,  description: 'Premium sound with active noise cancellation.', emoji: '🎧' },
    { name: 'Mechanical Keyboard', price: 129.99, description: 'RGB backlit, tactile switches for gaming & typing.', emoji: '⌨️' },
    { name: 'USB-C Hub',           price: 49.99,  description: '7-in-1 hub with HDMI, USB 3.0 and SD card reader.', emoji: '🔌' },
    { name: 'Webcam 4K',           price: 89.99,  description: 'Ultra-HD video for streaming and remote work.', emoji: '📷' },
    { name: 'LED Desk Lamp',       price: 34.99,  description: 'Adjustable brightness and color temperature.', emoji: '💡' },
    { name: 'Mouse Pad XL',        price: 24.99,  description: 'Extended non-slip surface for precision control.', emoji: '🖱️' },
  ];

  searchQuery: string = '';
  cartItems: CartItem[] = [];

  get filteredProducts(): Product[] {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) return this.allProducts;
    return this.allProducts.filter(
      p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }

  get cartTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  get totalItems(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  onProductAddedToCart(product: Product): void {
    const existing = this.cartItems.find(i => i.name === product.name);
    if (existing) {
      existing.quantity++;
      showToast(`${product.emoji} ${product.name} quantity updated (×${existing.quantity})`);
    } else {
      this.cartItems.push({ name: product.name, quantity: 1, price: product.price, emoji: product.emoji });
      showToast(`${product.emoji} ${product.name} added to cart!`);
    }
    cartCount.set(this.totalItems);
  }

  removeItem(name: string): void {
    this.cartItems = this.cartItems.filter(i => i.name !== name);
    cartCount.set(this.totalItems);
  }

  clearCart(): void {
    this.cartItems = [];
    cartCount.set(0);
    showToast('🗑️ Cart cleared', 'info');
  }
}
