import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlueDirective } from './directives/blue.directive';
import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BlueDirective, PhonePipe, CpfPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhonePipe,
    CpfPipe
  ]
})
export class SharedModule { }
