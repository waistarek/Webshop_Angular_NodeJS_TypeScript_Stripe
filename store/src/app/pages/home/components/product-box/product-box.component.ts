import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from 'src/app/models/product.model';


@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product:Product | undefined ={
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'shoes',
    descrption: 'Description',
    image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e70bf2f27522415d9de3aed701517080_9366/EQ21_Laufschuh_Grau_GY2195_04_standard.jpg'
  };
@Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }

}
