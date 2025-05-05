import { Component, OnInit } from '@angular/core';
import {Cart, CartItem} from 'src/app/models/cart.model'

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html' 
})
export class CartComponent implements OnInit {
  cart: Cart = {items:[
    {
      product: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e70bf2f27522415d9de3aed701517080_9366/EQ21_Laufschuh_Grau_GY2195_04_standard.jpg',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e70bf2f27522415d9de3aed701517080_9366/EQ21_Laufschuh_Grau_GY2195_04_standard.jpg',
      name: 'snickers',
      price: 150,
      quantity: 2,
      id: 1,
    },
    
  ]};
  dataSource : Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  getTotal(items: Array<CartItem>): number{
    return  items.
          map((item) => item.price * item.quantity)
        .reduce((prev, current) => prev + current, 0);
  }

}
