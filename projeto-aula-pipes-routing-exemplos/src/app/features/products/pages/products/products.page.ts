import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPageComponent implements OnInit {

  availableDateProducts: Date = new Date('2021-08-31');
  
  constructor() { }

  ngOnInit(): void {
  }

}
