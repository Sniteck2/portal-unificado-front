import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CompetenciaServiceService} from '../../services/competencia-service.service';
import {Competencia} from '../../models/competencia';
import {Tribunal} from '../../models/tribunal';
import {TribunalService} from '../../services/tribunal.service';
import {TipoCausaService} from '../../services/tipo-causa.service';
import {TipoCausa} from '../../models/tipo-causa';
import Swal from 'sweetalert2';
import {GrillaPortalComponent} from '../grilla-portal/grilla-portal.component';

@Component({
  selector: 'app-tarjeta-competencia',
  templateUrl: './tarjeta-competencia.component.html',
  styleUrls: ['./tarjeta-competencia.component.scss']
})
export class TarjetaCompetenciaComponent implements OnInit {

  @ViewChild(GrillaPortalComponent, {static: false}) grillaPortal: GrillaPortalComponent;
  @Input() competencias: Competencia[] = [];
  public tribunales: Tribunal[] = [];
  public tipoCausas: TipoCausa[] = [];
  public competencia: number;
  public tribunal: number;
  public tipoCausa: string;
  public anio: string;
  public rolCausa: string;


  anios = [
    {anioo: 2021},
    {anioo: 2020},
    {anioo: 2019},
    {anioo: 2018}
  ];

  constructor(private competenciaService: CompetenciaServiceService,
              private tribunalService: TribunalService,
              private tipoCausaService: TipoCausaService) {
  }

  ngOnInit() {
    this.listarCompetencia();
  }

  public listarCompetencia(): void {
    this.competenciaService.listarCompetencia().subscribe(data => {
      if (data != null) {
        this.competencias = data;
      }
    });
  }

  public cambioTribunales(): void {
    if (this.competencia != null) {
      Swal.fire({
        imageUrl: 'assets/img/gallery/loading.gif',
        showConfirmButton: false
      });
      this.tribunalService.listarTribunalesPorCompetencia(this.competencia).subscribe(data => {
        if (data != null) {
          this.tribunales = data;
          this.cambioTipoCausa();
          Swal.close();
        }
      });
    }

  }

  public cambioTipoCausa(): void {
      this.tipoCausaService.listarTipoCausaPorCompetencia(this.competencia).subscribe(data => {
        if (data != null) {
          this.tipoCausas = data;
        }
      });
  }

  public buscar() {
    if (this.competencia != undefined && this.tribunal != undefined && this.tipoCausa != null
      && this.rolCausa != undefined && this.anio != undefined) {
      this.grillaPortal.llenarGrilla(this.competencia, this.tribunal, this.tipoCausa, this.anio, this.rolCausa);
    } else {
      Swal.fire({
        title: 'Advertencia',
        text: 'Debe llenar todos los campos',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  }

}
