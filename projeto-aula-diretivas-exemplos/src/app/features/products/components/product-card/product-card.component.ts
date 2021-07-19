import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  // @Input()
  // id: number = 0;
  // @Input()
  // description: string = '';
  // @Input()
  // price: number = 0;
  // @Input()
  // img: string = '';

  @Input()
  product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  // addToCart() {
  //   alert(`O produto ${this.product?.description} foi adicionado ao carrinho!`);
  // }

  addToCart() {
    alert(`O produto ${this.product?.description} foi adicionado ao carrinho!`);
  }

  // getInstallmentProduct(price?: number) {
  //   if (price) return price / 10;
  //   return price;
  // }

  // getBilletPrice(price?: number) {
  //   if (price) return price * 0.95;
  //   return price;
  // }

}
