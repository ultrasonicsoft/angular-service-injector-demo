import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  sayHi(): string {
    return 'I am Users Service';
  }
}
