import { Component, computed, inject, input, signal } from '@angular/core';
import { BudgetProducts } from '../budget/budget-products';

@Component({
  selector: 'app-budget-list',
  imports: [],
  templateUrl: './budget-list.html',
  styleUrl: './budget-list.scss',
})
export class BudgetList {
  budgetServ = inject(BudgetProducts);
  budgets = this.budgetServ.budgets;
  search = signal('');
  filteredBudgets = computed(() => {
    if (!this.search()) return this.budgets();
    else return this.budgetServ.filterBudgetsByName(this.search());
  });

  setSearchValue(event: Event) {
    this.search.set((event.target as HTMLInputElement).value);
  }

}
