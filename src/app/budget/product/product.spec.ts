import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product } from './product';

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a title', () =>{
    const product = fixture.nativeElement as HTMLElement
    const title = product.querySelector('h2')
    expect(title).toBeTruthy()
  })
  it('should display product title', () =>{
    const product = fixture.nativeElement as HTMLElement
    const title = product.querySelector('h2')
    expect(title?.textContent).toEqual(component.product().name)
  })
  it('should contain a p', () =>{
    const product = fixture.nativeElement as HTMLElement
    const p = product.querySelector('p')
    expect(p).toBeTruthy()
  })
  it('should display product description', () =>{
    const product = fixture.nativeElement as HTMLElement
    const p = product.querySelector('p')
    expect(p?.textContent).toContain(component.product().description)
  })
  it('should display product price', () =>{
    const product = fixture.nativeElement as HTMLElement
    const price = product.querySelector('.price')
    expect(price?.textContent).toContain(component.product().price)
  })
  it('should contain an input', () => {
    const product = fixture.nativeElement as HTMLElement
    const input = product.querySelector('input')
    expect(input).toBeTruthy();
  });
  it('should contain a checkbox', () => {
    const product = fixture.nativeElement as HTMLElement
    const input = product.querySelector('input')
    expect(input?.type).toBe("checkbox");
  });
  it('should contain a checkbox value equal to product quantity', () => {
    const product = fixture.nativeElement as HTMLElement
    const input = product.querySelector('input')
    if(input?.type == "checkbox"){
      expect(input.checked).toBe(component.product().quantity==1);
    }
  });
  it('if products exists, should contain an app-panel', () => {
    if(component.product().products){
      const product = fixture.nativeElement as HTMLElement
      const app_panel = product.querySelector('app-panel')
      expect(app_panel).toBeTruthy();
    }
  });
});
