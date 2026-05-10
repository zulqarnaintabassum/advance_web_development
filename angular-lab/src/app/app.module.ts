import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

// Root component
import { App } from './app';

// Dashboard
import { DashboardComponent } from './dashboard/dashboard';

// Task 1 — Shopping Cart
import { Task1ShoppingCartComponent } from './task1-shopping-cart/task1-shopping-cart';
import { ProductCardComponent } from './product-card/product-card';

// Task 2 — User Status
import { Task2UserStatusComponent } from './task2-user-status/task2-user-status';
import { UserStatusComponent } from './user-status/user-status';

// Task 3 — Shared Counter
import { Task3CounterComponent } from './task3-counter/task3-counter';
import { CounterDisplayOneComponent } from './counter-display-one/counter-display-one';
import { CounterDisplayTwoComponent } from './counter-display-two/counter-display-two';

@NgModule({
  declarations: [
    // Root
    App,

    // Dashboard
    DashboardComponent,

    // Task 1
    Task1ShoppingCartComponent,
    ProductCardComponent,

    // Task 2
    Task2UserStatusComponent,
    UserStatusComponent,

    // Task 3
    Task3CounterComponent,
    CounterDisplayOneComponent,
    CounterDisplayTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
