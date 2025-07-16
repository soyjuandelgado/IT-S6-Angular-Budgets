import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from './iproduct';
import { PRODUCTS_DATA } from '../data/products-base';

@Injectable({
  providedIn: 'root',
})
export class BudgetProducts {
  list = signal<IProduct[]>(PRODUCTS_DATA);

  total = computed(() => {
    console.log(this.list());
    return this.list()
      .filter((p) => p.quantity > 0)
      .reduce((total, p) => total + this.productAmount(p), 0);
  });

  productAmount(p: IProduct) {
    let total = 0;
    if (p.products) {
      total = p.products
        .filter((prod) => prod.quantity > 0)
        .reduce((t, prod) => t + this.productAmount(prod), 0);
    }
    total += p.price * p.quantity;
    return total;
  }
}
