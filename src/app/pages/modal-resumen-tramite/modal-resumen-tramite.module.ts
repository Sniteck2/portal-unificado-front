import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import {HistoriaCausaTramiteModule} from './historia-causa-tramite/historia-causa-tramite.module';
import {ModalResumenTramiteComponent} from './modal-resumen-tramite.component';

@NgModule({
  declarations: [ModalResumenTramiteComponent],
  exports: [
      ModalResumenTramiteComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    HistoriaCausaTramiteModule]
})
export class ModalResumenTramiteModule { }
