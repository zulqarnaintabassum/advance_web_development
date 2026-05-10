import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  currentCount: number = 0;

  increment(): void {
    this.currentCount++;
  }

  decrement(): void {
    this.currentCount--;
  }
}
