import {Component, Input, OnInit} from '@angular/core';
import {Causa} from '../../models/causa';
import {Tramite} from '../../models/tramite';
import {TramiteService} from '../../services/tramite.service';
import {EscritoService} from '../../services/escrito.service';
import {Escrito} from '../../models/escrito';
import Swal from "sweetalert2";

@Component({
  selector: 'app-modal-resumen-tramite',
  templateUrl: './modal-resumen-tramite.component.html',
  styleUrls: ['./modal-resumen-tramite.component.scss']
})
export class ModalResumenTramiteComponent implements OnInit {

  @Input() public causa: Causa = new Causa();
  @Input() public tramites: Tramite[] = [];
  @Input() public escritos: Escrito[] = [];

  constructor(private tramiteService: TramiteService,
              private escritoService: EscritoService) {
  }

  ngOnInit() {
    this.listarTramites();
  }

  listarTramites() {
    Swal.fire({
      imageUrl: 'assets/img/gallery/loading.gif',
      showConfirmButton: false
    });
    this.tramiteService.listarTramitePorCausa(this.causa.id).subscribe(data => {
      if (data.length > 0) {
        this.tramites = data;
        this.listarEscritos(this.tramites);
      }
      Swal.close();

    }, error => {
      console.log(error);
    });
  }

  listarEscritos(tramites: Tramite[]) {
    let idCuaderno: number;
    tramites.forEach(tram => {
      idCuaderno = tram.idCuaderno;
    });
    this.escritoService.listarEscritoPorCuaderno(idCuaderno).subscribe(data => {
      if (data.length > 0) {
        this.escritos = data;
      }
    }, error => {
      console.log(error);
    });
  }
}
