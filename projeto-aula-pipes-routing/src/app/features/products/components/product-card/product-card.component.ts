import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
// import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product?: Product;

  currencyProductPrice?: string | null;

  discountPercent = (5 / 100);

  constructor(
    // private currencyPipe: CurrencyPipe
    ) { }

  ngOnInit(): void {
    // if(this.product) {
    //   this.currencyProductPrice = 
    //   this.currencyPipe.transform(this.product.price, 'BRL');
    // }
  }

  addToCart() {
    alert(`O produto ${this.product?.description} foi adicionado ao carrinho!`);
  }

  getPriceByDiscount() {
    if(this.product) {
      return this.product.price * (1 - (this.discountPercent * 1));
    }
    return 0;
  }

}
