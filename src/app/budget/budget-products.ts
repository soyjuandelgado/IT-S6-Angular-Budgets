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
    return this.productListAmount(this.list())
  });

  productAmount(p: IProduct) {
    let total = p.price * p.quantity;
    total += this.productListAmount(p.products);
    return total;
  }

  productListAmount(p: IProduct[] | undefined){
    let total = 0;
    if (p){
      total = p
        .filter((prod) => prod.quantity > 0)
        .reduce((t, prod) => t + this.productAmount(prod), 0);
    }
    return total;
  }
}
