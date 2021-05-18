import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModificarUsuarioComponent} from './modificar-usuario.component';

@NgModule({
  declarations: [ModificarUsuarioComponent],
  exports: [ModificarUsuarioComponent],
  imports: [
    CommonModule
  ]
})
export class ModificarUsuarioModule { }
