import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutComponent } from './cart-checkout.component';

describe('CartCheckoutComponent', () => {
  let component: CartCheckoutComponent;
  let fixture: ComponentFixture<CartCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
