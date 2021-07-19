import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForDirective } from './directives/for.directive';
import { BlueDirective } from './directives/blue.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ForDirective, BlueDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
