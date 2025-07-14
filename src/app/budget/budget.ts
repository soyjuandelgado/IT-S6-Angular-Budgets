import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Panel } from './panel/panel';

@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule, Panel],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})
export class Budget {
  seoPrice = 300;
  adsPrice = 400;
  webPrice = 500;
  totalPages = 1;
  totalLangs = 1;
  totalBudget = 0;
  doSEO = new FormControl(false);
  doAds = new FormControl(false);
  doWeb = new FormControl(false);

  calculateTotal() {
    let total = 0;
    total += this.doSEO.value? this.seoPrice: 0;
    total += this.doAds.value? this.adsPrice: 0;
    if (this.doWeb.value){
      total += this.webPrice;
      total += (this.totalPages + this.totalLangs) * 30;
    }
    this.totalBudget = total;
  }

  changeNumPages(value: number){
    this.totalPages = value;
    this.calculateTotal()
  }

  changeNumLangs(value: number){
    this.totalLangs = value;
    this.calculateTotal()
  }
}
