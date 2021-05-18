import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TarjetaCompetenciaComponent} from './tarjeta-competencia.component';

const routes: Routes = [
  {
    path: '',
    component: TarjetaCompetenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetaCompetenciaRoutingModule { }
