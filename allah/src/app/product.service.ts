import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
    new Product(1, 'product1', 'This is the product1 description, the product is really cool', 100),
    new Product(2, 'product2', 'This is the product1 description, the product is really cool', 120),
    new Product(3, 'product3', 'This is the product1 description, the product is really cool', 140),
    new Product(4, 'product4', 'This is the product1 description, the product is really cool', 160),
    new Product(5, 'product5', 'This is the product1 description, the product is really cool', 180),
    new Product(6, 'product6', 'This is the product1 description, the product is really cool', 200)
]

  constructor() { }
  getProducts():Product[]{
    return this.products;
  }
}
