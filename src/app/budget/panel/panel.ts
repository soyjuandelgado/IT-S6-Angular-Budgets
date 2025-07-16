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


  // numPages = new FormControl(1);
  // numLangs = new FormControl(1);

  // @Output() numPagesChange = new EventEmitter<number>();
  // @Output() numLangsChange = new EventEmitter<number>();

  // addPage() {
  //   if (this.numPages.value! < 100) {
  //     this.numPages.setValue(this.numPages.value! + 1);
  //     this.changePages();
  //   }
  // }
  // substractPage() {
  //   if (this.numPages.value! > 1) {
  //     this.numPages.setValue(this.numPages.value! - 1);
  //     this.changePages();
  //   }
  // }

  // changePages() {
  //   this.numPagesChange.emit(this.numPages.value!);
  // }

  // addLang() {
  //   if (this.numLangs.value! < 100) {
  //     this.numLangs.setValue(this.numLangs.value! + 1);
  //     this.changeLangs();
  //   }
  // }
  // substractLang() {
  //   if (this.numLangs.value! > 1) {
  //     this.numLangs.setValue(this.numLangs.value! - 1);
  //     this.changeLangs();
  //   }
  // }

  // changeLangs() {
  //   this.numLangsChange.emit(this.numLangs.value!);
  // }
}
