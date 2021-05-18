import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrillaPortalComponent} from './grilla-portal.component';
import {DataTablesModule} from 'angular-datatables';
import {ModalResumenTramiteModule} from '../modal-resumen-tramite/modal-resumen-tramite.module';



@NgModule({
  declarations: [GrillaPortalComponent],
  exports: [GrillaPortalComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    ModalResumenTramiteModule
  ]
})
export class GrillaPortalModule { }
