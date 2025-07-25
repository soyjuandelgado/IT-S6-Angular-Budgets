import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../shared/models/iproduct';
import { BudgetProducts } from '../../shared/services/budget-products';
import { Router } from '@angular/router';

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

  router = inject(Router)

  substract() {
    const value = this.getCurrentQuantity()
    if (value > 1) this.updateProductQuantity(value - 1);
  }

  add() {
    const value = this.getCurrentQuantity()
    if (value < 100) this.updateProductQuantity(value + 1);
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

  private getCurrentQuantity(): number {
    return this.products()[this.parentIndex()].products![this.productIndex()]
      .quantity;
  }

  private updateProductQuantity(newQuantity: number): void {
    this.products.update((currentProducts) => {
      const updatedProducts = [...currentProducts]; // Copia superficial para la inmutabilidad
      const parentProduct = { ...updatedProducts[this.parentIndex()] }; 

      if (parentProduct.products) {
        parentProduct.products = [...parentProduct.products];
        parentProduct.products[this.productIndex()] = {
          ...parentProduct.products[this.productIndex()],
          quantity: newQuantity,
        };
      }

      updatedProducts[this.parentIndex()] = parentProduct;
      return updatedProducts;
    });
    this.router.navigate([''], {
      queryParams: this.budgetServ.params(),
    })
  }
}
