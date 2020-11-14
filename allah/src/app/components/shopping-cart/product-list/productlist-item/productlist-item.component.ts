import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/product';
import { MessangerService } from 'src/app/messanger.service';

@Component({
  selector: 'app-productlist-item',
  templateUrl: './productlist-item.component.html',
  styleUrls: ['./productlist-item.component.css']
})
export class ProductlistItemComponent implements OnInit {
  @Input() ProductListItem:Product

  constructor(private msg:MessangerService) { }

  ngOnInit(): void {
  }

  HandleAddToCart(){
    this.msg.sendMsg(this.ProductListItem)
  }

}
