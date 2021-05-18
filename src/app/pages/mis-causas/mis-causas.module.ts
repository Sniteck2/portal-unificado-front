import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MisCausasRoutingModule} from './mis-causas-routing.module';
import {MisCausasComponent} from './mis-causas.component';
import {SharedModule} from '../../shared/shared.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {GrillaMisCausasModule} from './grilla-mis-causas/grilla-mis-causas.module';
import {TarjetasCausasCompetenciaModule} from './tarjetas-causas-competencia/tarjetas-causas-competencia.module';

@NgModule({
  declarations: [MisCausasComponent],
  imports: [
    CommonModule,
    MisCausasRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    TarjetasCausasCompetenciaModule,
    GrillaMisCausasModule
  ]
})
export class MisCausasModule { }
