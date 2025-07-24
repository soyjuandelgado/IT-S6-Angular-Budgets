import { Component, inject } from '@angular/core';
import { BudgetProducts } from '../shared/services/budget-products';
import { Product } from './product/product';
import { Client } from "./client/client";

@Component({
  selector: 'app-budget',
  imports: [Product, Client],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})
export class Budget {
  budgetServ = inject(BudgetProducts);
  products = this.budgetServ.list;
  totalBudget = this.budgetServ.total;
}
