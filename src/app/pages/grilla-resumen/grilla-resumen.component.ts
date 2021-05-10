import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {GrillaResumenService} from '../../services/grilla-resumen.service';
import {Resumen} from '../../models/resumen';
import Swal from 'sweetalert2';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-grilla-resumen',
  templateUrl: './grilla-resumen.component.html',
  styleUrls: ['./grilla-resumen.component.scss']
})
export class GrillaResumenComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChildren(DataTableDirective)
  public dtElements: QueryList<DataTableDirective>;
  public dtOptions: DataTables.Settings[] = [];
  public dtTrigger: Subject<any> = new Subject();

  public resumenCausa: Resumen[] = [];
  public resumenCuaderno: Resumen[] = [];
  public resumenEscrito: Resumen[] = [];
  public resumenParte: Resumen[] = [];
  public resumenTramite: Resumen[] = [];
  constructor(private grillaResumenService: GrillaResumenService) {}

  ngOnInit() {
    this.dtOptions[0] = this.constructorDtOptions();
    this.dtOptions[1] = this.constructorDtOptions();
    this.dtOptions[2] = this.constructorDtOptions();
    this.dtOptions[3] = this.constructorDtOptions();
    this.dtOptions[4] = this.constructorDtOptions();
    this.prueba();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  private renderizarDatatable(): void {
      this.dtElements.forEach((dtElement: DataTableDirective) => {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          dtElement.dtTrigger.next();
        });
      });
  }

  public prueba() {
    Swal.fire({
      imageUrl: 'assets/img/gallery/loading.gif',
      showConfirmButton: false
    });
    this.grillaResumenService.listarResumenEtl().subscribe(data => {
      if (data) {
        this.resumenCausa = data.resumenCausaVOS;
        this.resumenCuaderno = data.resumenCuadernoVOS;
        this.resumenEscrito = data.resumenEscritoVOS;
        this.resumenParte = data.resumenParteVOS;
        this.resumenTramite = data.resumenTramiteVOS;
        this.renderizarDatatable();
        Swal.close();
      }
    }, error => {
      console.log(error);
    });
  }

  private constructorDtOptions(): DataTables.Settings {
    return {
      pageLength: 10,
      paging: true,
      ordering: false,
      searching: false,
      destroy: true,
      language: {
        processing: 'Procesando...',
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ registros',
        infoEmpty: 'Mostrando ningún registro',
        infoFiltered: '(filtrado _MAX_ elementos total)',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
        loadingRecords: 'Cargando registros...',
        zeroRecords: 'No se encontraron registros',
        emptyTable: 'No hay datos disponibles en la tabla',
        paginate: {
          first: 'Primero',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'Último'
        },
        aria: {
          sortAscending: ': Activar para ordenar la tabla en orden ascendente',
          sortDescending: ': Activar para ordenar la tabla en orden descendente'
        }
      }
    };
  }

}
