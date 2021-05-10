import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import Swal from 'sweetalert2';
import {CausaService} from '../../../services/causa.service';
import {Causa} from '../../../models/causa';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grilla-mis-causas',
  templateUrl: './grilla-mis-causas.component.html',
  styleUrls: ['./grilla-mis-causas.component.scss']
})
export class GrillaMisCausasComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {read: false, static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @Output() cantidad = new EventEmitter<number>();
  @Output() cantidadCivil = new EventEmitter<number>();
  @Output() cantidadLaboral = new EventEmitter<number>();
  @Output() enviarCausas = new EventEmitter<Causa[]>();
  public causas: Causa[] = [];
  @Input() public causa: Causa = new Causa();
  @Input() public idCausa: number;
  private cant: number;
  private cantCivil = 0;
  private cantLaboral = 0;

  constructor(private causaService: CausaService,
              private modal: NgbModal) {
  }

  ngOnInit() {
    this.dtOptions = {
      pageLength: 10,
      paging: true,
      language: {
        processing: 'Procesando...',
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ causas',
        infoEmpty: 'Mostrando ningún causa',
        infoFiltered: '(filtrado _MAX_ elementos total)',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ causas',
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

  public llenarGrillaMisCausas(causa: Causa): void {
    Swal.fire({
      imageUrl: 'assets/img/gallery/loading.gif',
      showConfirmButton: false
    });
    this.causaService.buscarCausaParte(causa).subscribe(data => {
      if (data.length != 0) {
        this.causas = [];
        for (const c of data) {
          const caus: Causa = new Causa();
          caus.id = c.id;
          caus.tipoCausa = c.tipoCausa;
          caus.rolCausa = c.rolCausa;
          caus.eraCausa = c.eraCausa;
          caus.tribunalVO = c.tribunalVO;
          caus.competenciaVO = c.competenciaVO;
          caus.glosaParte = c.glosaParte;
          caus.fechaIngresoCausa = c.fechaIngresoCausa;
          this.causas.push(caus);
          this.mandaCausas(this.causas);
          this.cant = this.causas.length;
          this.enviarCantidad();
        }
        Swal.close();
        this.renderizarDatatable();
      } else {
        this.causas = [];
        this.mandaCausas(this.causas);
        this.renderizarDatatable();
        Swal.fire({
          title: 'Info',
          text: 'El usuario no tiene causas asociadas',
          icon: 'info',
          confirmButtonText: 'Aceptar'
        });
      }
    }, error => {
      Swal.fire({
        title: 'Error',
        text: 'Error, reintente mas tarde',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    });
  }

  private renderizarDatatable(): void {
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

  public enviarCantidad(): void {
    this.cantidad.emit(this.cant);
  }

  public mandaCausas(causas: Causa[]): void {
    this.enviarCausas.emit(causas);
  }

  open(content, idCausa: number) {
    this.causas.forEach(c => {
      if (c.id === idCausa) {
        this.causa = c;
      }
    });
    this.modal.open(content, {size: 'xl'});
  }
}


