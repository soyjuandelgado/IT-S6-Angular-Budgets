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
    const value = this.getCurrentQuantity()
    if (value > 1) this.updateProductQuantity(value - 1);
    // const value = 
      // this.products()[this.parentIndex()].products![this.productIndex()]
      //   .quantity;
    // if (value > 1) this.changeQuantity(value - 1);
  }

  add() {
    const value = this.getCurrentQuantity()
    if (value < 100) this.updateProductQuantity(value + 1);
    // const value =
      // this.products()[this.parentIndex()].products![this.productIndex()]
      //   .quantity;
    // if (value < 100) this.changeQuantity(value + 1);
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
  // Función auxiliar para actualizar la cantidad del subproducto

  // Función auxiliar para obtener la cantidad actual del subproducto
  private getCurrentQuantity(): number {
    return this.products()[this.parentIndex()].products![this.productIndex()]
      .quantity;
  }

  private updateProductQuantity(newQuantity: number): void {
    this.products.update((currentProducts) => {
      const updatedProducts = [...currentProducts]; // Copia superficial para la inmutabilidad
      const parentProduct = { ...updatedProducts[this.parentIndex()] }; // Copia el producto padre

      // Asegúrate de que products exista antes de intentar copiarlo
      if (parentProduct.products) {
        parentProduct.products = [...parentProduct.products]; // Copia los subproductos
        parentProduct.products[this.productIndex()] = {
          ...parentProduct.products[this.productIndex()],
          quantity: newQuantity,
        }; // Actualiza el subproducto específico
      }

      updatedProducts[this.parentIndex()] = parentProduct; // Asigna el producto padre actualizado
      return updatedProducts;
    });
  }
}
