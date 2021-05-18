import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import {GrillaMisCausasComponent} from './grilla-mis-causas.component';
import {ModalResumenTramiteModule} from '../../modal-resumen-tramite/modal-resumen-tramite.module';

@NgModule({
  declarations: [GrillaMisCausasComponent],
  exports: [
    GrillaMisCausasComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ModalResumenTramiteModule
  ]
})
export class GrillaMisCausasModule { }
