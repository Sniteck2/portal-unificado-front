import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrillaTramiteComponent} from './grilla-tramite.component';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  declarations: [GrillaTramiteComponent],
  exports: [GrillaTramiteComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ]
})
export class GrillaTramiteModule { }
