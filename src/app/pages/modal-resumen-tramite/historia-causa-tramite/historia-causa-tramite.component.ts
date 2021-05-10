import {Component, Input, OnInit} from '@angular/core';
import {Tramite} from '../../../models/tramite';
import {Escrito} from '../../../models/escrito';

@Component({
  selector: 'app-historia-causa-tramite',
  templateUrl: './historia-causa-tramite.component.html',
  styleUrls: ['./historia-causa-tramite.component.scss']
})
export class HistoriaCausaTramiteComponent implements OnInit {

  @Input() public tramites: Tramite[] = [];
  @Input() public escritos: Escrito[] = [];

  constructor() { }

  ngOnInit() {
  }

}
