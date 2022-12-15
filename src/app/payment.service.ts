import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  discount = 10;

  constructor() { }

  sayHi(): string {
    return 'I am Payment Service';
  }

  getDiscount(): string {
    return `Congrualtions! You got ${this.discount}%.`;
  }
}
