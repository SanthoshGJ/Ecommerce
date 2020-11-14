import { Component, OnInit } from '@angular/core';
import{ MessangerService } from 'src/app/messanger.service'
import { Product } from 'src/app/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
    // {id:1, productId:2,productName:'Test 1', qty:3, price:150},
    // {id:2, productId:2, productName:'Test 1',qty:5, price:350},
    // {id:3, productId:2, productName:'Test 1', qty:2, price:250},
    // {id:4, productId:2,productName:'Test 1', qty:4, price:450}
  ]
  constructor(private msg:MessangerService) { }
  cartTotal=0

  ngOnInit(){
    this.msg.getMsg().subscribe((product:Product) =>{
     this.addTocartProduct(product)
})
} 
  addTocartProduct(product:Product){

    let productExists= false;
    for(let i in this.cartItems){
      if (this.cartItems[i].productId===product.id){
        this.cartItems[i].qty++;
        productExists=true;
        break;
      }
    }



if(!productExists){
    this.cartItems.push({
      productId:product.id,
      productName:product.name,
      qty:1,
      price:product.price
    })
  }
  this.cartTotal =0
  this.cartItems.forEach(item => {
  this.cartTotal += (item.qty*item.price)
})
}
  }
  