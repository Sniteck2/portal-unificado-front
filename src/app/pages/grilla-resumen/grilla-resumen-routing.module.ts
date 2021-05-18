import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GrillaResumenComponent} from './grilla-resumen.component';

const routes: Routes = [
  {
    path: '',
    component: GrillaResumenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrillaResumenRoutingModule { }
