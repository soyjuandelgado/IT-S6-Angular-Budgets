import { Component, computed, input } from '@angular/core';
import { Panel } from '../panel/panel';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product',
  imports: [Panel],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  product = input<IProduct>()
  total = 0;

  totalBudget = computed( () => {
    console.log(this.product())
    let total = this.product()!.price * this.product()!.quantity;
    if(this.product()!.products){
      total += this.product()!.products!.filter((p) => p.quantity > 0)
        .reduce((total, p) => total + p.price * p.quantity, 0)
    }
    return total;
});
}
