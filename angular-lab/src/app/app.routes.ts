import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { Task1ShoppingCartComponent } from './task1-shopping-cart/task1-shopping-cart';
import { Task2UserStatusComponent } from './task2-user-status/task2-user-status';
import { Task3CounterComponent } from './task3-counter/task3-counter';

export const routes: Routes = [
  { path: '',        redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task1',     component: Task1ShoppingCartComponent },
  { path: 'task2',     component: Task2UserStatusComponent },
  { path: 'task3',     component: Task3CounterComponent },
];
