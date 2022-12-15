import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCartCheckoutComponent } from './discount-cart-checkout.component';

describe('DiscountCartCheckoutComponent', () => {
  let component: DiscountCartCheckoutComponent;
  let fixture: ComponentFixture<DiscountCartCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountCartCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCartCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
