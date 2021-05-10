import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {Escrito} from '../../../../models/escrito';

@Component({
  selector: 'app-grilla-escrito',
  templateUrl: './grilla-escrito.component.html',
  styleUrls: ['./grilla-escrito.component.scss']
})
export class GrillaEscritoComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren(DataTableDirective)
  public dtElements: QueryList<DataTableDirective>;
  public dtOptions: DataTables.Settings[] = [];
  public dtTrigger: Subject<any> = new Subject();

  @Input() public escritos: Escrito[] = [];
  public escritosCargados: Escrito[] = [];

  constructor() { }

  ngOnInit() {
    this.dtOptions[0] = this.constructorDtOptions();
    this.cargarEscritos();
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

  private cargarEscritos() {
    this.escritosCargados = this.escritos;
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
