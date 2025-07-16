import { Component, EventEmitter, input, output, Output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  product = input<IProduct>()

  substract() {
    if (this.product()!.quantity > 1) {
      this.product()!.quantity--;
      //this.product.update( p => ({...p, quantity: p.quantity - 1 })) 
      console.log(this.product())
    }
  }

  add() {
    if (this.product()!.quantity < 100) {
      this.product()!.quantity++; 
      console.log(this.product())
    }
  }

}
