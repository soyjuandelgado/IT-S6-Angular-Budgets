import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BudgetProducts {
  list: Product[] =[
    {
      id: "seo",
      name: "SEO",
      description: "*Hacer una campaña SEO.",
      price: 303,
      quantity: 0
    },
    {
      id: "ads",
      name: "Ads",
      description: "*Realización de una campaña publicitaria.",
      price: 404,
      quantity: 0
    },
    {
      id: "web",
      name: "Web",
      description: "*Programación de una web responsive completa.",
      price: 505,
      quantity: 0,
      products:[
        {
          id: "web-page",
          name: "Páginas",
          description: "Cantidad de páginas de la web. Mínimo tiene que tener una.",
          price: 30,
          quantity: 1
        },
        {
          id: "web-lang",
          name: "Idiomas",
          description: "Cantidad de idiomas de la web. Mínimo tiene que tener uno.",
          price: 30,
          quantity: 1
        }
      ]
    }
  ]

  
}
