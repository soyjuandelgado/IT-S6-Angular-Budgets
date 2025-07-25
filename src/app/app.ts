import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Budget } from './budget/budget';
import { BudgetList } from './budget-list/budget-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Budget, BudgetList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'IT-S6-Angular-Budgets';
}
