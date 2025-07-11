import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})
export class Budget {
  seoPrice = 300;
  adsPrice = 400;
  webPrice = 500;
  totalBudget = 0;
  doSEO = new FormControl(false);
  doAds = new FormControl(false);
  doWeb = new FormControl(false);

  calculateTotal() {
    let total = 0;
    total += this.doSEO.value? this.seoPrice: 0;
    total += this.doAds.value? this.adsPrice: 0;
    total += this.doWeb.value? this.webPrice: 0;
    this.totalBudget = total;
  }
}
