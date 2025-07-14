import { TestBed } from '@angular/core/testing';

import { BudgetCalculator } from './budget-calculator';

describe('BudgetCalculator', () => {
  let service: BudgetCalculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetCalculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
