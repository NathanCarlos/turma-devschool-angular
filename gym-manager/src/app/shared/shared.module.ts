import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTextPipe } from './pipes/change-text.pipe';
import { BlueDirective } from './directives/blue.directive';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent
];

const directives = [
  BlueDirective
];

const pipes = [
  ChangeTextPipe
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes
  ]
})
export class SharedModule { }
