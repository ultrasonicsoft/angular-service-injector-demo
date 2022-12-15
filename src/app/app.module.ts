import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscountCartCheckoutComponent } from './discount-cart-checkout/discount-cart-checkout.component';
import { DiscountedProductComponent } from './discounted-product/discounted-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscountCartCheckoutComponent,
    DiscountedProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
