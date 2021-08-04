import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { RedDirective } from './directives/red.directive';
import { RouterModule } from '@angular/router';
import { MessageDialogComponent } from './dialogs/message-dialog/message-dialog.component';

/**
 * Importação dos módulos do angular material
 */
 import {MatButtonModule} from '@angular/material/button';
 import {MatCardModule} from '@angular/material/card';
 import {MatDialogModule} from '@angular/material/dialog';
 import {MatDividerModule} from '@angular/material/divider';
 import {MatIconModule} from '@angular/material/icon';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
 
const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule
];

const components = [
  HeaderComponent,
  FooterComponent,
  MessageDialogComponent
];

const pipes = [CpfPipe];

const directives = [RedDirective];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...pipes,
    ...directives,
    ...materialModules
  ]
})
export class SharedModule { }
