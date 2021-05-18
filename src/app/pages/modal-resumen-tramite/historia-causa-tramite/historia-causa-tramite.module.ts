import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import {GrillaTramiteModule} from './grilla-tramite/grilla-tramite.module';
import {GrillaEscritoModule} from './grilla-escrito/grilla-escrito.module';
import {HistoriaCausaTramiteComponent} from './historia-causa-tramite.component';

@NgModule({
  declarations: [HistoriaCausaTramiteComponent],
  exports: [HistoriaCausaTramiteComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    GrillaTramiteModule,
    GrillaEscritoModule
  ]
})
export class HistoriaCausaTramiteModule { }
