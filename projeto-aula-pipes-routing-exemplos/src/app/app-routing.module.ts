import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './features/products/products.module';
import { ProductsPageComponent } from './features/products/pages/products/products.page';
import { LoginPageComponent } from './features/login/pages/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
