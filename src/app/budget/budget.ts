import { Component, inject } from '@angular/core';
import { BudgetProducts } from './budget-products';
import { Product } from './product/product';

@Component({
  selector: 'app-budget',
  imports: [Product],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})
export class Budget {
  budgetServ = inject(BudgetProducts);
  products = this.budgetServ.list;
  totalBudget = this.budgetServ.total;
}
