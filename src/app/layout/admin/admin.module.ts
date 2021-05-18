import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import {RouterModule} from '@angular/router';
import {AppModule} from '../../app.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppModule,
    SharedModule
  ]
})
export class AdminModule { }
