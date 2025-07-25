import { TestBed } from '@angular/core/testing';

import { BudgetProducts } from './budget-products';

describe('BudgetProducts', () => {
  let service: BudgetProducts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetProducts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('productAmount: should be declared', () => {
    expect(typeof service.productAmount).toBe('function');
  });
  it('productAmount: should return a number', () => {
    expect(
      typeof service.productAmount({
        id: '',
        name: '',
        description: '',
        price: 10,
        quantity: 0,
      })
    ).toBe('number');
  });
  it('productAmount: should return 0 if product.quantity = 0', () => {
    expect(
      service.productAmount({
        id: '',
        name: '',
        description: '',
        price: 10,
        quantity: 0,
      })
    ).toBe(0);
  });
  it('productAmount: should return 0 if product.price = 0', () => {
    expect(
      service.productAmount({
        id: '',
        name: '',
        description: '',
        price: 0,
        quantity: 1,
      })
    ).toBe(0);
  });
  it('productAmount: should return 10 if product.price = 10 and quantity = 1', () => {
    expect(
      service.productAmount({
        id: '',
        name: '',
        description: '',
        price: 10,
        quantity: 1,
      })
    ).toBe(10);
  });
  it('productAmount tracks that the spy was called if there are products', function () {
    spyOn(service, 'productListAmount').and.returnValue(0);
    service.productAmount({
      id: '',
      name: '',
      description: '',
      price: 10,
      quantity: 1,
      products: [],
    });
    expect(service.productListAmount).toHaveBeenCalled();
  });
  it('productAmount: should return (product.price * quantity) + productListAmount()', () => {
    spyOn(service, 'productListAmount').and.returnValue(50);
    expect(
      service.productAmount({
        id: '',
        name: '',
        description: '',
        price: 10,
        quantity: 1,
        products: [
          {
            id: '',
            name: '',
            description: '',
            price: 50,
            quantity: 1,
          },
        ],
      })
    ).toBe(60);
  });
  it('productListAmount: should be declared', () => {
    expect(typeof service.productListAmount).toBe('function');
  });
  it('productListAmount: should return a number', () => {
    expect(typeof service.productListAmount(undefined)).toBe(`number`);
  });
  it('productListAmount: should return 0 with an empty array', () => {
    expect(service.productListAmount([])).toBe(0);
  });
  it('productListAmount: should not call productAmount', () => {
    spyOn(service, 'productAmount').and.returnValue(1);
    service.productListAmount([]);
    expect(service.productAmount).not.toHaveBeenCalled();
  });
  it('productListAmount: should call productAmount', () => {
    spyOn(service, 'productAmount').and.returnValue(1);
    service.productListAmount([
      {
        id: '',
        name: '',
        description: '',
        price: 1,
        quantity: 1,
      },
    ]);
    expect(service.productAmount).toHaveBeenCalled();
  });
  it('productListAmount: should return productAmount * array.length', () => {
    spyOn(service, 'productAmount').and.returnValue(1);
    expect(service.productListAmount([
      {
        id: '',
        name: '',
        description: '',
        price: 1,
        quantity: 1,
      },
      {
        id: '',
        name: '',
        description: '',
        price: 1,
        quantity: 1,
      },
      {
        id: '',
        name: '',
        description: '',
        price: 1,
        quantity: 1,
      },
    ])).toBe(3);
  });
});
