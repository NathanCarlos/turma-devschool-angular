import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product?: Product;

  percentDiscount = 5;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    alert(`O produto ${this.product?.description} foi adicionado ao carrinho!`);
  }

  getPriceWithDiscount(price: number): number {
    return price * ((100 - 5) / 100);
  }

}
