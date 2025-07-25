import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { IClient } from '../models/iclient';
import { IBudget } from '../models/ibudget';
import { PRODUCTS_DATA } from '../../data/products-base';
import { BUDGETS_TEST_LIST } from '../../data/budgets-test';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BudgetProducts {
  budgets = signal<IBudget[]>(BUDGETS_TEST_LIST);
  list = signal<IProduct[]>(PRODUCTS_DATA);
  client = signal<IClient>({ name: '', phone: '', email: '' });
  total = computed(() => {
    console.log(this.list());
    return this.productListAmount(this.list());
  });

  params = computed(() => {
    // const query: { [key: string]: string } = {};
    const query: Record<string, string> = {};
    this.list()
      .filter((p) => p.quantity > 0)
      .forEach((p) => {
        query[p.id] = p.quantity.toString();
        if (p.products) {
          p.products.forEach((sp) => {
            query[sp.id] = sp.quantity.toString();
          });
        }
      });
    return query;
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

  saveBudget() {
    if (!this.productsSelected()) return false;
    this.appendBudget();
    this.resetBudget();
    console.log(this.budgets());
    return true;
  }

  productsSelected = () =>
    this.list().filter((prod) => prod.quantity > 0).length > 0;

  resetBudget() {
    this.list.set(PRODUCTS_DATA);
    this.client.set({ name: '', phone: '', email: '' });
  }

  createBudget = (): IBudget => ({
    products: JSON.parse(JSON.stringify(this.list())), //Copia profunda
    client: { ...this.client() },
    total: this.total(),
    date: new Date(),
  });

  appendBudget = () => {
    this.budgets.update((budget) => [...budget, this.createBudget()]);
  };

  orderBudgetsByName() {
    this.budgets.set(
      this.budgets().sort((b1, b2) =>
        b1.client.name < b2.client.name ? -1 : 1
      )
    );
  }

  orderBudgetsByTotal() {
    this.budgets.set(this.budgets().sort((b1, b2) => b1.total - b2.total));
  }
  orderBudgetsByDate() {
    this.budgets.set(
      this.budgets().sort((b1, b2) => b1.date.getTime() - b2.date.getTime())
    );
  }
  filterBudgetsByName(text: string): IBudget[] {
    return this.budgets().filter((budget) =>
      budget.client.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  loadBudget(params: Params) {
    this.list.update((currentList) =>
      currentList.map((p) => {
        if (params[p.id]) {
          if (p.products) {
            return {
              ...p,
              quantity: Number(params[p.id]),
              products: p.products.map((sp) => ({
                ...sp,
                quantity: params[sp.id] ? Number(params[sp.id]) : 0,
              })),
            };
          }else{
            return { ...p, quantity: Number(params[p.id]) };
          }
        } else {
          return { ...p, quantity: 0 };
        }
      })
    );
  }
}
