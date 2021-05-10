import {Component, Input, OnInit} from '@angular/core';
import {Tramite} from '../../../models/tramite';

@Component({
  selector: 'app-historia-causa-tramite',
  templateUrl: './historia-causa-tramite.component.html',
  styleUrls: ['./historia-causa-tramite.component.scss']
})
export class HistoriaCausaTramiteComponent implements OnInit {

  @Input() public tramites: Tramite[] = [];

  constructor() { }

  ngOnInit() {
  }

}
