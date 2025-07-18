import { IProduct } from "../budget/iproduct";

export const PRODUCTS_DATA: IProduct[] =[
    {
      id: 'seo',
      name: 'SEO',
      description: 'Hacer una campaña SEO.',
      price: 300,
      quantity: 0,
    },
    {
      id: 'ads',
      name: 'Ads',
      description: 'Realización de una campaña publicitaria.',
      price: 400,
      quantity: 0,
    },
    {
      id: 'web',
      name: 'Web',
      description: 'Programación de una web responsive completa.',
      price: 500,
      quantity: 0,
      products: [
        {
          id: 'web-page',
          name: 'Número de Páginas',
          description:
            'Añade la cantidad de páginas que tendrá tu proyecto web. El coste de cada página es de ',
          price: 30,
          quantity: 1,
        },
        {
          id: 'web-lang',
          name: 'Número de Idiomas',
          description:
            'Añade la cantidad de idiomas que tendrá tu proyecto web. El coste de cada idioma es de ',
          price: 30,
          quantity: 1,
        },
      ],
    },
  ];
