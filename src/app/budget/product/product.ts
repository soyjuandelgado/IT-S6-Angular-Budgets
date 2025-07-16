import { Component, inject, input } from '@angular/core';
import { Panel } from '../panel/panel';
import { IProduct } from '../iproduct';
import { BudgetProducts } from '../budget-products';

@Component({
  selector: 'app-product',
  imports: [Panel],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  budgetServ = inject(BudgetProducts);
  products = this.budgetServ.list;
  parentIndex = input(0);
  product = input<IProduct>({
    id: 'seo',
    name: 'SEO',
    description: '*Hacer una campaña SEO.',
    price: 303,
    quantity: 0,
  });

  changeProduct(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.checked ? 1 : 0;
    this.products.update((arr) =>
      arr.map((p, i) =>
        i === this.parentIndex() ? { ...p, quantity: value } : p
      )
    );
  }
}
