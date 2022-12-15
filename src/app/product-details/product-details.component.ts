import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { PaymentService } from '../payment.service';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  ordersMessage!: string;
  paymentMessage!: string;
  productsMessage!: string;
  usersMessage!:string;

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private paymentService: PaymentService,
    private productsService: ProductsService,
    private usersService: UsersService){
  }

  ngOnInit() {
    this.ordersMessage = this.ordersService.sayHi();
    this.paymentMessage = this.paymentService.sayHi();
    this.productsMessage = this.productsService.sayHi();
    this.usersMessage = this.usersService.sayHi();
  }
}
