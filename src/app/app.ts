import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Budget } from "./budget/budget";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Budget],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'IT-S6-Angular-Budgets';
}
