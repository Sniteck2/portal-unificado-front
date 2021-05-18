import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrillaResumenComponent} from './grilla-resumen.component';
import {DataTablesModule} from 'angular-datatables';
import {GrillaResumenRoutingModule} from './grilla-resumen-routing.module';



@NgModule({
  declarations: [GrillaResumenComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    GrillaResumenRoutingModule
  ]
})
export class GrillaResumenModule { }
