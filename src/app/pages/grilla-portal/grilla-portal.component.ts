import {
  AfterViewInit,
  Component,
  Input, OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Subject} from "rxjs";
import {DataTableDirective} from 'angular-datatables';
import {Causa} from "../../models/causa";
import Swal from "sweetalert2";
import {CausaService} from "../../services/causa.service";

@Component({
  selector: 'app-grilla-portal',
  templateUrl: './grilla-portal.component.html',
  styleUrls: ['./grilla-portal.component.scss']
})
export class GrillaPortalComponent implements OnInit, AfterViewInit, OnDestroy {

  public causas: Causa[] = [];

  @ViewChild(DataTableDirective, {read: false, static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private causaService: CausaService) { }

  ngOnInit() {
    this.dtOptions =  {
      pageLength: 10,
      paging: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ causas",
        infoEmpty: "Mostrando ningún causa",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        info: "Mostrando _START_ a _END_ de _TOTAL_ causas",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
  }

  llenarGrilla(competencia: number, tribunal: number, tipoCausa: string, anio: string, rolCausa: string): void{
    this.causaService.buscarCausa(competencia, tribunal, tipoCausa, rolCausa, anio).subscribe(data => {
      if(data.id != -1){
         this.causas = [];
         let causa: Causa = new Causa();
         causa.id = data.id;
         causa.tipoCausa = data.tipoCausa;
         causa.rolCausa = data.rolCausa;
         causa.eraCausa = data.eraCausa;
         causa.tribunalVO = data.tribunalVO;
         causa.competenciaVO = data.competenciaVO;
         causa.glosaParte = data.glosaParte;
         causa.fechaIngresoCausa = data.fechaIngresoCausa;
         this.causas.push(causa);
         this.renderizarDatatable();
      }else{
        Swal.fire({
          title: "Info",
          text: "Causa no encontrada",
          icon: "info",
          confirmButtonText: 'Aceptar'
        });

      }
    }, error => {
      Swal.fire({
        title: "Error",
        text: "Reintente mas tarde",
        icon: "warning",
        confirmButtonText: 'Aceptar'
      });
    });

  }

  private renderizarDatatable() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

}


