import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedProductComponent } from './discounted-product.component';

describe('DiscountedProductComponent', () => {
  let component: DiscountedProductComponent;
  let fixture: ComponentFixture<DiscountedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
