import {Component, Input, OnInit} from '@angular/core';
import {Competencia} from '../../../models/competencia';

@Component({
  selector: 'app-tarjetas-causas-competencia',
  templateUrl: './tarjetas-causas-competencia.component.html',
  styleUrls: ['./tarjetas-causas-competencia.component.scss']
})
export class TarjetasCausasCompetenciaComponent implements OnInit {

  @Input() competencias: Competencia[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}

