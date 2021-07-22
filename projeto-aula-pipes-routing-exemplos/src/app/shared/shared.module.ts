import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlueDirective } from './directives/blue.directive';
import { CurrencyBrPipe } from './pipes/currency-br.pipe';

const components = [
  HeaderComponent,
  FooterComponent
];

const directives = [
  BlueDirective
];

const pipes = [
  CurrencyBrPipe
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes
  ]
})
export class SharedModule { }
