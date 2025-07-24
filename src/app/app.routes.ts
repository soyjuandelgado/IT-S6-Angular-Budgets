import { Routes } from '@angular/router';
import { Budget } from './budget/budget';
import { Product } from './budget/product/product';

export const routes: Routes = [
  {
    path: 'budget',
    component: Budget,
  },
  {
    path: 'product',
    component: Product,
  },
];
