import { IBudget } from "../shared/models/ibudget"

export const BUDGETS_TEST_LIST: IBudget[] = [
    {
        "products": [
            {
                "id": "seo",
                "name": "SEO",
                "description": "Hacer una campaña SEO.",
                "price": 300,
                "quantity": 0
            },
            {
                "id": "ads",
                "name": "Ads",
                "description": "Realización de una campaña publicitaria.",
                "price": 400,
                "quantity": 0
            },
            {
                "id": "web",
                "name": "Web",
                "description": "Programación de una web responsive completa.",
                "price": 500,
                "quantity": 1,
                "products": [
                    {
                        "id": "web-page",
                        "name": "Número de Páginas",
                        "description": "Añade la cantidad de páginas que tendrá tu proyecto web. El coste de cada página es de ",
                        "price": 30,
                        "quantity": 2
                    },
                    {
                        "id": "web-lang",
                        "name": "Número de Idiomas",
                        "description": "Añade la cantidad de idiomas que tendrá tu proyecto web. El coste de cada idioma es de ",
                        "price": 30,
                        "quantity": 3
                    }
                ]
            }
        ],
        "client": {
            "name": "Ana",
            "phone": "123456789",
            "email": "ana@ana.com"
        },
        "total": 650,
        "date": new Date("2025-07-23T17:07:36.152Z")
    },
    {
        "products": [
            {
                "id": "seo",
                "name": "SEO",
                "description": "Hacer una campaña SEO.",
                "price": 300,
                "quantity": 0
            },
            {
                "id": "ads",
                "name": "Ads",
                "description": "Realización de una campaña publicitaria.",
                "price": 400,
                "quantity": 1
            },
            {
                "id": "web",
                "name": "Web",
                "description": "Programación de una web responsive completa.",
                "price": 500,
                "quantity": 0,
                "products": [
                    {
                        "id": "web-page",
                        "name": "Número de Páginas",
                        "description": "Añade la cantidad de páginas que tendrá tu proyecto web. El coste de cada página es de ",
                        "price": 30,
                        "quantity": 1
                    },
                    {
                        "id": "web-lang",
                        "name": "Número de Idiomas",
                        "description": "Añade la cantidad de idiomas que tendrá tu proyecto web. El coste de cada idioma es de ",
                        "price": 30,
                        "quantity": 1
                    }
                ]
            }
        ],
        "client": {
            "name": "Pedro",
            "phone": "987654312",
            "email": "pedro@a.com"
        },
        "total": 400,
        "date": new Date("2025-07-23T17:08:17.952Z")
    },
    {
        "products": [
            {
                "id": "seo",
                "name": "SEO",
                "description": "Hacer una campaña SEO.",
                "price": 300,
                "quantity": 1
            },
            {
                "id": "ads",
                "name": "Ads",
                "description": "Realización de una campaña publicitaria.",
                "price": 400,
                "quantity": 0
            },
            {
                "id": "web",
                "name": "Web",
                "description": "Programación de una web responsive completa.",
                "price": 500,
                "quantity": 0,
                "products": [
                    {
                        "id": "web-page",
                        "name": "Número de Páginas",
                        "description": "Añade la cantidad de páginas que tendrá tu proyecto web. El coste de cada página es de ",
                        "price": 30,
                        "quantity": 1
                    },
                    {
                        "id": "web-lang",
                        "name": "Número de Idiomas",
                        "description": "Añade la cantidad de idiomas que tendrá tu proyecto web. El coste de cada idioma es de ",
                        "price": 30,
                        "quantity": 1
                    }
                ]
            }
        ],
        "client": {
            "name": "Juan",
            "phone": "963852741",
            "email": "juan@juan.com"
        },
        "total": 300,
        "date": new Date("2025-07-23T17:08:45.415Z")
    }
]