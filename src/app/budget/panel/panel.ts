import { Component, inject, input } from '@angular/core';
import { IProduct } from '../iproduct';
import { BudgetProducts } from '../budget-products';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  budgetServ = inject(BudgetProducts);
  products = this.budgetServ.list;
  parentIndex = input(0);
  productIndex = input(0);
  product = input<IProduct>({
    id: 'seo',
    name: 'SEO',
    description: '*Hacer una campaña SEO.',
    price: 303,
    quantity: 0,
  });
  showModal = false;

  substract() {
    const value =
      this.products()[this.parentIndex()].products![this.productIndex()]
        .quantity;
    if (value > 1) this.changeQuantity(value - 1);
  }

  add() {
    const value =
      this.products()[this.parentIndex()].products![this.productIndex()]
        .quantity;
    if (value < 100) this.changeQuantity(value + 1);
  }

  changeQuantity(value: number) {
    const arr = [...this.products()];
    arr[this.parentIndex()].products![this.productIndex()].quantity = value;
    this.products.set(arr);
  }

  openInformation() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // @HostListener('document:keydown.escape', ['$event'])
  // onKeydownHandler(event: KeyboardEvent) {
  //   // La acción de cerrar solo se ejecuta si el modal está abierto
  //   if (this.showModal) {
  //     this.closeModal();
  //   }
  // }
}
