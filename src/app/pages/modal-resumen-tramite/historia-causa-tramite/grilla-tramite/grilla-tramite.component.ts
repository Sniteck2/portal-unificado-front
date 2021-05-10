import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {Tramite} from '../../../../models/tramite';

@Component({
  selector: 'app-grilla-tramite',
  templateUrl: './grilla-tramite.component.html',
  styleUrls: ['./grilla-tramite.component.scss']
})
export class GrillaTramiteComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {read: false, static: false})
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings[] = [];
  public dtTrigger: Subject<any> = new Subject();

  @Input() public tramites: Tramite[] = [];
  public tramiteCargados: Tramite[] = [];

  constructor() {
  }

  ngOnInit() {
    this.dtOptions[0] = this.constructorDtOptions();
    this.cargarTramites();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  private renderizarDatatable(): void {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
  }

  private cargarTramites() {
    this.tramiteCargados = this.tramites;
    this.renderizarDatatable();
  }

  private constructorDtOptions(): DataTables.Settings {
    return {
      pageLength: 10,
      paging: true,
      ordering: true,
      searching: true,
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
