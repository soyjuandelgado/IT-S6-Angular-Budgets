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
});
