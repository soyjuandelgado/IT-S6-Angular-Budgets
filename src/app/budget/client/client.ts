import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BudgetProducts } from '../budget-products';

@Component({
  selector: 'app-client',
  imports: [ReactiveFormsModule],
  templateUrl: './client.html',
  styleUrl: './client.scss',
})
export class Client {
  budgetServ = inject(BudgetProducts);
  client = this.budgetServ.client;
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern(/^((\+?\d{1,3})?\d{9})$/),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  ]);

  clientForm = new FormGroup({
    name: this.name,
    phone: this.phone,
    email: this.email,
  });

  save() {
    if (this.clientForm.valid) {
      this.client.update((c) => {
        c.name = this.name.value!;
        c.phone = this.phone.value!;
        c.email = this.email.value!;
        return c;
      });
      console.log(this.client())
      console.log(this.budgetServ.client())
      if(this.budgetServ.save())
        this.clientForm.reset();
      else  
        alert("Agregue algún producto antes de solicitar presupuesto.")
    }
  }
}
