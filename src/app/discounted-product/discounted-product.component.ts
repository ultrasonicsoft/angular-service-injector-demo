import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { PaymentService } from '../payment.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-discounted-product',
  templateUrl: './discounted-product.component.html',
  styleUrls: ['./discounted-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountedProductComponent extends ProductDetailsComponent {

  constructor(router: Router,
    activatedRoute: ActivatedRoute,
    ordersService: OrdersService,
    paymentService: PaymentService,
    productsService: ProductsService,
    usersService: UsersService) {

    super(router,
      activatedRoute,
      ordersService,
      paymentService,
      productsService,
      usersService)
  }
}
