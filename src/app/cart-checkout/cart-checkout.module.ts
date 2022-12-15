import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartCheckoutRoutingModule } from './cart-checkout-routing.module';
import { CartCheckoutComponent } from './cart-checkout.component';


@NgModule({
  declarations: [
    CartCheckoutComponent
  ],
  imports: [
    CommonModule,
    CartCheckoutRoutingModule
  ]
})
export class CartCheckoutModule { }
