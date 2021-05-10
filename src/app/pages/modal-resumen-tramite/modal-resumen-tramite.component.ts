import {Component, Input, OnInit} from '@angular/core';
import {Causa} from '../../models/causa';
import {Tramite} from '../../models/tramite';
import {TramiteService} from '../../services/tramite.service';

@Component({
  selector: 'app-modal-resumen-tramite',
  templateUrl: './modal-resumen-tramite.component.html',
  styleUrls: ['./modal-resumen-tramite.component.scss']
})
export class ModalResumenTramiteComponent implements OnInit {

  @Input() public causa: Causa = new Causa();
  @Input() public tramites: Tramite[] = [];

  constructor(private tramiteService: TramiteService) {
  }

  ngOnInit() {
    this.listartTramites();
  }

  listartTramites() {
    this.tramiteService.listarTramitePorCausa(this.causa.id).subscribe(data => {
      if (data.length > 0) {
        this.tramites = data;
      }

    }, error => {
      console.log(error);
    })
  }

}
