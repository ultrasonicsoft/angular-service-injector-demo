import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartCheckoutComponent } from './cart-checkout.component';

const routes: Routes = [{ path: '', component: CartCheckoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartCheckoutRoutingModule { }
