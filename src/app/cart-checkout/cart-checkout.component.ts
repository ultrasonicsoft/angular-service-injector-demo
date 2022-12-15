import { Component, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { PaymentService } from '../payment.service';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent {

  ordersMessage!: string;
  paymentMessage!: string;
  productsMessage!: string;
  usersMessage!:string;

  constructor(protected injector: Injector) { }

  ngOnInit() {
    let router: Router = this.injector.get(Router);
    let activatedRoute: ActivatedRoute = this.injector.get(ActivatedRoute);
    let ordersService: OrdersService = this.injector.get(OrdersService);
    let paymentService: PaymentService = this.injector.get(PaymentService);
    let productsService: ProductsService = this.injector.get(ProductsService);
    let usersService: UsersService = this.injector.get(UsersService);


    this.ordersMessage = ordersService.sayHi();
    this.paymentMessage = paymentService.sayHi();
    this.productsMessage = productsService.sayHi();
    this.usersMessage = usersService.sayHi();
    
  }
}
