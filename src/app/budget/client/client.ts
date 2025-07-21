import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [ReactiveFormsModule],
  templateUrl: './client.html',
  styleUrl: './client.scss',
})
export class Client {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern(/^((\+?\d{1,3})?\d{9})$/),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  ]);

  client = new FormGroup({
    name: this.name,
    phone: this.phone,
    email: this.email
  });

  save() {
    if (this.client.valid) {
      alert('Datos correctos');
      this.client.reset();
    }
  }
}
