import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  sayHi(): string {
    return 'I am Products Service';
  }
}
