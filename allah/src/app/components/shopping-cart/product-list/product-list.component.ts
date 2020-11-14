import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service'
import { Product } from 'src/app/product'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[]=[]

  constructor(private productLst: ProductService) { }

  ngOnInit(): void {
    this.productList= this.productLst.getProducts();
  }

}
