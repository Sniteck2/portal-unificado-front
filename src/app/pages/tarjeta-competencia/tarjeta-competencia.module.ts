import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarjetaCompetenciaComponent} from './tarjeta-competencia.component';
import {TarjetaCompetenciaRoutingModule} from './tarjeta-competencia-routing.module';
import {GrillaPortalModule} from '../grilla-portal/grilla-portal.module';
import {SharedModule} from '../../shared/shared.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TarjetaCompetenciaComponent],
  imports: [
    CommonModule,
    TarjetaCompetenciaRoutingModule,
    GrillaPortalModule,
    SharedModule,
    NgSelectModule,
    FormsModule
  ]
})
export class TarjetaCompetenciaModule { }
