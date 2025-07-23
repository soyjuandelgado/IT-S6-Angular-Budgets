import { Component, inject} from '@angular/core';
import { BudgetProducts } from '../budget/budget-products';

@Component({
  selector: 'app-budget-list',
  imports: [],
  templateUrl: './budget-list.html',
  styleUrl: './budget-list.scss'
})
export class BudgetList {
  budgetServ = inject(BudgetProducts)
  budgets = this.budgetServ.budgets
}
