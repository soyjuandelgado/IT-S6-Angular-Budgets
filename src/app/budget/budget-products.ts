import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from './iproduct';
import { PRODUCTS_DATA } from '../data/products-base';
import { IClient } from './iclient';
import { IBudget } from './ibudget';

@Injectable({
  providedIn: 'root',
})
export class BudgetProducts {
  list = signal<IProduct[]>(PRODUCTS_DATA);
  client = signal<IClient>({ name: '', phone: '', email: '' });

  total = computed(() => {
    console.log(this.list());
    return this.productListAmount(this.list());
  });

  productAmount(p: IProduct) {
    let total = p.price * p.quantity;
    total += this.productListAmount(p.products);
    return total;
  }

  productListAmount(p: IProduct[] | undefined) {
    let total = 0;
    if (p) {
      total = p
        .filter((prod) => prod.quantity > 0)
        .reduce((t, prod) => t + this.productAmount(prod), 0);
    }
    return total;
  }

  save() {
    if (!this.productsSelected()) return false;
    //const budget = this.createBudget();
    this.resetBudget();
    return true;
  }

  productsSelected = () => this.list().filter((prod) => prod.quantity > 0).length > 0;

  resetBudget() {
    this.list.set(PRODUCTS_DATA);
    this.client.set({ name: '', phone: '', email: '' });
  }

  createBudget = ():IBudget => ({ products: [...this.list()], client: {...this.client()}, total: this.total()});
}
