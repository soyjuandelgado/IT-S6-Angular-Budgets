# IT-S6-Angular-Budgets

## 🗂️Tabla de contenidos

- [IT-S6-Angular-Budgets](#it-s6-angular-budgets)
  - [🗂️Tabla de contenidos](#️tabla-de-contenidos)
  - [📄Descripción](#descripción)
    - [1. Creación del formulario](#1-creación-del-formulario)
    - [2. Añadir páginas e idiomas](#2-añadir-páginas-e-idiomas)
    - [3. Mostrar ventana de información](#3-mostrar-ventana-de-información)
    - [4. Testing](#4-testing)
    - [5. Lista de presupuestos](#5-lista-de-presupuestos)
    - [6. Ordenar presupuestos](#6-ordenar-presupuestos)
  - [💻Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [📋Requisitos](#requisitos)
  - [🛠️Instalación](#️instalación)
    - [1. Descargar el repositorio](#1-descargar-el-repositorio)
    - [2. Instalación de paquetes Node.js](#2-instalación-de-paquetes-nodejs)
  - [▶️Ejecución](#️ejecución)
    - [Testing](#testing)
  - [📸 Demo](#-demo)

## 📄Descripción

PENDIENTE

### 1. Creación del formulario

- Maquetar web inicial
- Crear un formulario con tres bloques: SEO, Ads y Web
- Al hacer activar los checks, se suman los precios al total del presupuesto.

### 2. Añadir páginas e idiomas

- En el elemento Web, añadir el número de páginas y de idiomas
- Añadir botones para subir y bajar los valores de páginas e idiomas
- Calcular el presupuesto con los elementos nuevos
- Separar en componentes: budget, product y panel.
- Implementar signal para gestionar cambios
- Mover cálculos a servicio
- Mover datos a archivo de datos

<img src="public/ex2.png" width="500">

### 3. Mostrar ventana de información

- Crear ventana modal que muestre título y descripción.
- Añadir botones de info al panel.
- Abrir aviso al hacer clic en info.
- Cerrar la ventana,
- Cargar datos del panel a la ventana modal.

<img src="public/ex3.png" width="500">

### 4. Testing

- Tests del servicio `budget-products`
  - `productAmount()`
  - `productListAmount()`
- Tests del componente `budget`
- Tests del componente `product`

<img src="public/ex4.png" width="500">

### 5. Lista de presupuestos

- Añadir formulario con datos de cliente
- Validar formulario
- Guardar presupuesto en servicio
- Mostrar lista de presupuestos
- Formatear componentes

<img src="public/ex5.png" width="400">
<img src="public/ex5-error.png" width="400">
<img src="public/ex5-mobile.png" width="200">
<img src="public/ex5-mobile-list.png" width="200">

### 6. Ordenar presupuestos

- Hacer funciones de ordenación en el servicio
  - `orderBudgetsByName()`
  - `orderBudgetsByTotal()`
  - `orderBudgetsByDate()`
- Añadir botones de ordenación y darle estilos
- Cambiar botones por input radio

<img src="public/ex6.png" width="500">

## 💻Tecnologías Utilizadas

- HTML
- Tailwind
- Typescript
- Angular
- Eslint
- Karma / Jasmine

## 📋Requisitos

- Navegador web
- Node.js
  
## 🛠️Instalación

PENDIENTE

### 1. Descargar el repositorio

```shell
git clone https://github.com/soyjuandelgado/IT-S6-Angular-Budgets.git destino
```

### 2. Instalación de paquetes Node.js

```shell
npm install
```

## ▶️Ejecución

```shell
ng serve -o
```

### Testing

```shell
ng test
```

## 📸 Demo

Visitar la web: [Web](https://it-s6-angular-budgets-git-develop-juans-projects-c1221148.vercel.app/)
