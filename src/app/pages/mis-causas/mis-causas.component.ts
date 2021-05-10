import {Component, OnInit, ViewChild} from '@angular/core';
import {Competencia} from '../../models/competencia';
import {CompetenciaServiceService} from '../../services/competencia-service.service';
import Swal from 'sweetalert2';
import {GrillaMisCausasComponent} from './grilla-mis-causas/grilla-mis-causas.component';
import {Causa} from '../../models/causa';

@Component({
  selector: 'app-mis-causas',
  templateUrl: './mis-causas.component.html',
  styleUrls: ['./mis-causas.component.scss']
})
export class MisCausasComponent implements OnInit {

  @ViewChild(GrillaMisCausasComponent, {static: false}) grillaMisCausas: GrillaMisCausasComponent;
  public competencias: Competencia[] = [];
  public causa: Causa[] = [];
  public competencia: [];
  public fechaInicio: string;
  public fechaFinal: string;
  public cantidades = 0;
  public cantiCivil = 0;
  public cantiLaboral = 0;
  public cantiCobranza = 0;
  public cantCausas: Causa[] = [];
  private idUsuario: number;
  private validaFechaInicio: Date;
  private validaFechaFinal: Date;

  constructor(private competenciaService: CompetenciaServiceService) {
  }

  ngOnInit() {
    this.listarCompetencia();
    const data = JSON.parse(sessionStorage.getItem('UsuarioLogin'));
    this.idUsuario = data.id;
  }

  public listarCompetencia(): void {
    this.competenciaService.listarCompetencia().subscribe(data => {
      if (data != null) {
        this.competencias = data;
      }
    });
  }

  public llenarGrilla(): void {
    if (this.competencia != undefined && this.fechaInicio != undefined && this.fechaFinal != undefined) {
      if (this.competencia.length != 0) {
        const causa: Causa = new Causa;
        causa.idUsuario = this.idUsuario;
        causa.competencias = this.competencia;
        causa.fechaInicio = this.fechaInicio;
        causa.fechaFinal = this.fechaFinal;
        this.grillaMisCausas.llenarGrillaMisCausas(causa);
      } else {
        Swal.fire({
          title: 'Info',
          text: 'Debe llenar todos los campos para continuar.',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      }
    } else {
      Swal.fire({
        title: 'Info',
        text: 'Debe llenar todos los campos para continuar.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  public recibirCantidad($event): void {
    this.cantidades = $event;
  }

  public recibeCausas($event): void {
    this.cantCausas = $event;
    if (this.cantCausas.length == 0) {
      this.competencias.forEach(comp => {
        if (comp.id == 1) {
          comp.cantidadComp = 0;
        }
        if (comp.id == 3) {
          comp.cantidadComp = 0;
        }
        if (comp.id == 4) {
          comp.cantidadComp = 0;
        }
      });
      this.cantiCivil = 0;
      this.cantiLaboral = 0;
      this.cantiCobranza = 0;
      this.cantidades = 0;
    } else {
      this.cantCausas.forEach(causas => {
        this.competencias.forEach(comp => {
          if (causas.competenciaVO.id == 1 && comp.id == 1) {
            this.cantiCivil++;
            comp.cantidadComp = this.cantiCivil;
          }
          if (causas.competenciaVO.id == 3 && comp.id == 3) {
            this.cantiLaboral++;
            comp.cantidadComp = this.cantiLaboral;
          }
          if (causas.competenciaVO.id == 4 && comp.id == 4) {
            this.cantiCobranza++;
            comp.cantidadComp = this.cantiCobranza;
          }
        });
      });
      this.cantiCivil = 0;
      this.cantiLaboral = 0;
      this.cantiCobranza = 0;
    }

  }

  public validarFechas(): void {
    this.validaFechaInicio = new Date(this.fechaInicio);
    this.validaFechaFinal = new Date(this.fechaFinal);
    const fechaInicioValida = (this.validaFechaInicio.getUTCMonth() + 1);
    const fechaFinalValida = (this.validaFechaFinal.getUTCMonth() + 1);
    const hoy = new Date();

    if ((fechaFinalValida - fechaInicioValida) > 3) {
      Swal.fire({
        title: 'Info',
        text: 'Periodo no puede ser mayor a 3 meses.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    } else {
      this.llenarGrilla();
    }
  }
}




