import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root',
})
export class BudgetProducts {
  list = signal<IProduct[]>([
    {
      id: 'seo',
      name: 'SEO',
      description: '*Hacer una campaña SEO.',
      price: 303,
      quantity: 0,
    },
    {
      id: 'ads',
      name: 'Ads',
      description: '*Realización de una campaña publicitaria.',
      price: 404,
      quantity: 0,
    },
    {
      id: 'web',
      name: 'Web',
      description: '*Programación de una web responsive completa.',
      price: 505,
      quantity: 0,
      products: [
        {
          id: 'web-page',
          name: 'Páginas',
          description:
            'Cantidad de páginas de la web. Mínimo tiene que tener una.',
          price: 30,
          quantity: 1,
        },
        {
          id: 'web-lang',
          name: 'Idiomas',
          description:
            'Cantidad de idiomas de la web. Mínimo tiene que tener uno.',
          price: 30,
          quantity: 1,
        },
      ],
    },
  ]);

  total = computed(() => {
    console.log(this.list());
    return this.list()
      .filter((p) => p.quantity > 0)
      .reduce((total, p) => total + this.productAmount(p), 0);
  });

  productAmount(p: IProduct) {
    let total = 0;
    if (p.products) {
      total = p.products
        .filter((prod) => prod.quantity > 0)
        .reduce((t, prod) => t + this.productAmount(prod), 0);
    }
    total += p.price * p.quantity;
    return total;
  }
}
