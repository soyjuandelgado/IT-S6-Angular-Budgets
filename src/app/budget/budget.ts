import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule],
  templateUrl: './budget.html',
  styleUrl: './budget.scss'
})
export class Budget {
  doSEO = new FormControl(false);
  doAds = new FormControl(false);
  doWeb = new FormControl(false);
}
