import { Component, signal } from '@angular/core';

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'info';
}

export const cartCount = signal<number>(0);
export const toasts = signal<ToastMessage[]>([]);
let toastId = 0;

export function showToast(message: string, type: 'success' | 'info' = 'success'): void {
  const id = ++toastId;
  toasts.update(t => [...t, { id, message, type }]);
  setTimeout(() => {
    toasts.update(t => t.filter(x => x.id !== id));
  }, 3000);
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly cartCount = cartCount;
  readonly toasts = toasts;

  readonly navLinks = [
    { path: '/dashboard', label: 'Dashboard',     icon: '🏠' },
    { path: '/task1',     label: 'Shopping Cart', icon: '🛒' },
    { path: '/task2',     label: 'User Status',   icon: '👤' },
    { path: '/task3',     label: 'Counter',        icon: '🔗' },
  ];
}
