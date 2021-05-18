import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrillaEscritoComponent} from './grilla-escrito.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [GrillaEscritoComponent],
  exports: [GrillaEscritoComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ]
})
export class GrillaEscritoModule { }
