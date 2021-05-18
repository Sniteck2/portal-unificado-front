import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarjetasCausasCompetenciaComponent} from './tarjetas-causas-competencia.component';



@NgModule({
  declarations: [TarjetasCausasCompetenciaComponent],
  exports: [
    TarjetasCausasCompetenciaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TarjetasCausasCompetenciaModule { }
