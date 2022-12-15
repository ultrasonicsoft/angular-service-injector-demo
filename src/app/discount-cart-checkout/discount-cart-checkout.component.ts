import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CartCheckoutComponent } from '../cart-checkout/cart-checkout.component';
import { PaymentService } from '../payment.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'discount-cart-checkout',
  templateUrl: './discount-cart-checkout.component.html',
  styleUrls: ['./discount-cart-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountCartCheckoutComponent extends CartCheckoutComponent {

  discountMessage!: string;

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    const paymentService = this.injector.get(PaymentService);
    this.discountMessage = paymentService.getDiscount();
  }
}
