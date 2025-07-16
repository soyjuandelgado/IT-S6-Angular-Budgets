import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Panel } from './panel/panel';
import { BudgetProducts } from './budget-products';
import { Product } from './product/product';
import { IProduct } from './iproduct';

@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule, Panel, Product],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})
export class Budget {
  budgetServ = inject(BudgetProducts);
  products = this.budgetServ.list;
  totalBudget = this.budgetServ.total;

  changeProduct(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.checked ? 1 : 0;
    this.products.update((arr) =>
      arr.map((p, i) => (i === index ? { ...p, quantity: value } : p))
    );
  }

  substract(index1: number, index2: number) {
    const value = this.products()[index1].products![index2].quantity;
    if (value > 1) this.changeQuantity(value - 1, index1, index2);
  }

  add(index1: number, index2: number) {
    const value = this.products()[index1].products![index2].quantity;
    if (value < 100) this.changeQuantity(value + 1, index1, index2);
  }

  changeQuantity(value: number, index1: number, index2: number) {
    const arr = [...this.products()];
    arr[index1].products![index2].quantity = value;
    this.products.set(arr);
  }
}
