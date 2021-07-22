import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsPageComponent } from './pages/products/products.page';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent, ProductsPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsModule { }
