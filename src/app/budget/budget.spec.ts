import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Budget } from './budget';

describe('Budget', () => {
  let component: Budget;
  let fixture: ComponentFixture<Budget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Budget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Budget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a form', () => {
    const budget = fixture.nativeElement as HTMLElement
    const form = budget.querySelector('form')
    expect(form).toBeTruthy();
  });
  it('should contain a app-product', () => {
    const budget = fixture.nativeElement as HTMLElement
    const app_product = budget.querySelector('app-product')
    expect(app_product).toBeTruthy();
  });
  it('should contain a total-budget', () => {
    const budget = fixture.nativeElement as HTMLElement
    const element = budget.querySelector('.total-budget')
    expect(element).toBeTruthy();
  });
  it('should total-budget content is totalBudget value', () => {
    const budget = fixture.nativeElement as HTMLElement
    const element = budget.querySelector('.total-budget')
    expect(element?.textContent).toEqual(String(component.totalBudget()));
  });
});
