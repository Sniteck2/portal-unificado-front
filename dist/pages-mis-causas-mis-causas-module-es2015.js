(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mis-causas-mis-causas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-bordered table-responsive-sm table-hover table-sm\" id=\"grilla-mis-causas\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n  <thead class=\"fondo-grilla\">\n  <tr>\n    <th>Competencia</th>\n    <th>Rit</th>\n    <th>Tribunal</th>\n    <th>Caratulado</th>\n    <th>Fecha de Ingreso</th>\n    <th>Institución</th>\n    <th>Trámites</th>\n  </tr>\n  </thead>\n  <tbody>\n  <ng-container>\n    <tr *ngFor=\"let item of causas\">\n      <td>{{item.competenciaVO.glosa}}</td>\n      <td>{{item.tipoCausa}}-{{item.rolCausa}}-{{item.eraCausa}}</td>\n      <td>{{item.tribunalVO.glosa}}</td>\n      <td>{{item.glosaParte}}</td>\n      <td>{{item.fechaIngresoCausa | date: 'dd/MM/yyyy'}}</td>\n      <td>--</td>\n      <td class=\"centrado\"><input type=\"image\" class=\"imagen\" src=\"assets/img/gallery/lupa.png\" (click)=\"open(tramite, item.id)\"/></td>\n    </tr>\n  </ng-container>\n  </tbody>\n</table>\n\n<ng-template let-modal #tramite>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Detalle Trámite</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-modal-resumen-tramite [causa]=\"causa\">\n\n    </app-modal-resumen-tramite>\n  </div>\n</ng-template>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/mis-causas.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/mis-causas.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" >\n  <div class=\"card-bar\">\n    <div class=\"card-title\">\n      <b>Mis causas</b>\n    </div>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\">\n        <div class=\"row justify-content-center\">\n          <div class=\"div-padre\">\n            <div class=\"div-hijo\">\n              <label><b>Seleccione Competencia:</b></label>\n            </div>\n            <div class=\"col-md-3\">\n              <ng-select [(ngModel)]=\"competencia\" [multiple]=\"true\"\n                         placeholder=\"Competencia\">\n                <ng-option *ngFor=\"let item of competencias\" [value]=\"item.id\">{{item.glosa}}</ng-option>\n              </ng-select>\n            </div>\n            <div class=\"div-hijo\">\n              <label><b>Fecha modificación causa</b></label>&nbsp;&nbsp;&nbsp;\n            </div>\n            <div class=\"div-hijo\">\n              <label><b>Desde: </b>&nbsp;</label><input type=\"date\" [(ngModel)]=\"fechaInicio\">&nbsp;\n            </div>\n            <div class=\"div-hijo\">\n              <label><b>Hasta: </b>&nbsp;</label><input type=\"date\" [(ngModel)]=\"fechaFinal\">\n            </div>\n          </div>\n          <div class=\"div-padres\">\n            <button class=\"btn btn--radius btn--red\" type=\"button\" (click)=\"validarFechas()\"><b>Consultar causas</b></button>\n          </div>\n          <br><br>\n          <div class=\"col-md-12\" style=\"margin-top: 50px\">\n            <div class=\"card\">\n              <div class=\"card-bar\">\n                <div class=\"card-title\">\n                  <b>Detalle causas [Total: {{cantidades}}]</b>\n                </div>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"\">\n                  <div class=\"justify-content-center\">\n                    <app-tarjetas-causas-competencia [competencias]=\"competencias\">\n\n                    </app-tarjetas-causas-competencia>\n                  </div>\n                </div>\n                <br>\n                <app-grilla-mis-causas (cantidad)=\"recibirCantidad($event)\"\n                                       (enviarCausas)=\"recibeCausas($event)\">\n                </app-grilla-mis-causas>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <br><br>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"div-padre\">\n    <div *ngFor=\"let item of competencias\">\n        <div class=\"card color-todos\" *ngIf=\"item.nuevaGlosa != 'Todos'\">\n          <div class=\"card-body text-center\">\n            <label class=\"card-title texto\"><b>{{item.nuevaGlosa }} : {{item.cantidadComp != null ? item.cantidadComp : 0}}</b></label>\n          </div>\n        </div>\n    </div>\n  </div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo-grilla {\n  background-color: #5360a9;\n  color: white;\n}\n\n.imagen {\n  width: 40px;\n}\n\n.centrado {\n  text-align: center;\n}\n\nth {\n  background-color: #6f82bf;\n  color: #fff;\n  font-weight: 500;\n  font-size: 16px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzLWNhdXNhcy9ncmlsbGEtbWlzLWNhdXNhcy9EOlxcRG93bmxvYWRzXFxQcnVlYmEgbG9naW5cXHBvcnRhbC11bmlmaWNhZG8tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxtaXMtY2F1c2FzXFxncmlsbGEtbWlzLWNhdXNhc1xcZ3JpbGxhLW1pcy1jYXVzYXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21pcy1jYXVzYXMvZ3JpbGxhLW1pcy1jYXVzYXMvZ3JpbGxhLW1pcy1jYXVzYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taXMtY2F1c2FzL2dyaWxsYS1taXMtY2F1c2FzL2dyaWxsYS1taXMtY2F1c2FzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvLWdyaWxsYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2MGE5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmltYWdlbntcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmNlbnRyYWRve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmODJiZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn0iLCIuZm9uZG8tZ3JpbGxhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjBhOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY4MmJmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GrillaMisCausasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaMisCausasComponent", function() { return GrillaMisCausasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_causa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/causa.service */ "./src/app/services/causa.service.ts");
/* harmony import */ var _models_causa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/causa */ "./src/app/models/causa.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let GrillaMisCausasComponent = class GrillaMisCausasComponent {
    constructor(causaService, modal) {
        this.causaService = causaService;
        this.modal = modal;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cantidad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cantidadCivil = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cantidadLaboral = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cantidadCobranza = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enviarCausas = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.causas = [];
        this.causa = new _models_causa__WEBPACK_IMPORTED_MODULE_6__["Causa"]();
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
    llenarGrillaMisCausas(causa) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            imageUrl: 'assets/img/gallery/loading.gif',
            showConfirmButton: false
        });
        this.causaService.buscarCausaParte(causa).subscribe(data => {
            if (data.length != 0) {
                this.causas = [];
                for (const c of data) {
                    const caus = new _models_causa__WEBPACK_IMPORTED_MODULE_6__["Causa"]();
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                this.renderizarDatatable();
            }
            else {
                this.causas = [];
                this.mandaCausas(this.causas);
                this.renderizarDatatable();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Info',
                    text: 'El usuario no tiene causas asociadas',
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                });
            }
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Error',
                text: 'Error, reintente mas tarde',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    renderizarDatatable() {
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.destroy();
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
    }
    enviarCantidad() {
        this.cantidad.emit(this.cant);
    }
    mandaCausas(causas) {
        this.enviarCausas.emit(causas);
    }
    open(content, idCausa) {
        this.causas.forEach(c => {
            if (c.id === idCausa) {
                this.causa = c;
            }
        });
        this.modal.open(content, { size: 'xl' });
    }
};
GrillaMisCausasComponent.ctorParameters = () => [
    { type: _services_causa_service__WEBPACK_IMPORTED_MODULE_5__["CausaService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], { read: false, static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
], GrillaMisCausasComponent.prototype, "dtElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GrillaMisCausasComponent.prototype, "cantidad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GrillaMisCausasComponent.prototype, "cantidadCivil", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GrillaMisCausasComponent.prototype, "cantidadLaboral", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GrillaMisCausasComponent.prototype, "cantidadCobranza", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GrillaMisCausasComponent.prototype, "enviarCausas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_causa__WEBPACK_IMPORTED_MODULE_6__["Causa"])
], GrillaMisCausasComponent.prototype, "causa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GrillaMisCausasComponent.prototype, "idCausa", void 0);
GrillaMisCausasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grilla-mis-causas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grilla-mis-causas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grilla-mis-causas.component.scss */ "./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_causa_service__WEBPACK_IMPORTED_MODULE_5__["CausaService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
], GrillaMisCausasComponent);



/***/ }),

/***/ "./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.module.ts ***!
  \********************************************************************************/
/*! exports provided: GrillaMisCausasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaMisCausasModule", function() { return GrillaMisCausasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _grilla_mis_causas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grilla-mis-causas.component */ "./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.ts");
/* harmony import */ var _modal_resumen_tramite_modal_resumen_tramite_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal-resumen-tramite/modal-resumen-tramite.module */ "./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.module.ts");






let GrillaMisCausasModule = class GrillaMisCausasModule {
};
GrillaMisCausasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_grilla_mis_causas_component__WEBPACK_IMPORTED_MODULE_4__["GrillaMisCausasComponent"]],
        exports: [
            _grilla_mis_causas_component__WEBPACK_IMPORTED_MODULE_4__["GrillaMisCausasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            _modal_resumen_tramite_modal_resumen_tramite_module__WEBPACK_IMPORTED_MODULE_5__["ModalResumenTramiteModule"]
        ]
    })
], GrillaMisCausasModule);



/***/ }),

/***/ "./src/app/pages/mis-causas/mis-causas-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/mis-causas/mis-causas-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MisCausasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisCausasRoutingModule", function() { return MisCausasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mis_causas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-causas.component */ "./src/app/pages/mis-causas/mis-causas.component.ts");




const routes = [
    {
        path: '',
        component: _mis_causas_component__WEBPACK_IMPORTED_MODULE_3__["MisCausasComponent"]
    }
];
let MisCausasRoutingModule = class MisCausasRoutingModule {
};
MisCausasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MisCausasRoutingModule);



/***/ }),

/***/ "./src/app/pages/mis-causas/mis-causas.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/mis-causas/mis-causas.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-competencia {\n  color: #000000 !important;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  height: 36px;\n}\n\n.div-padre {\n  margin: 10px;\n  margin-left: 149px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n}\n\n.div-padres {\n  margin: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n}\n\n.div-hijo {\n  margin-top: 10px;\n}\n\n.cambio-letra {\n  color: white;\n}\n\n.btn--red {\n  background: #65BB69;\n}\n\n.btn--radius {\n  border-radius: 3px;\n}\n\n.rol-causa {\n  border: 1px solid #ccc;\n  height: 37px;\n  border-radius: 4px;\n}\n\n.card {\n  border: 1px solid #6f83bf;\n  color: #8e8e8e;\n}\n\n.card-bar {\n  background-color: #5360a9;\n  color: white;\n  border-bottom: rgba(0, 0, 0, 0.13) 1px solid;\n  display: flex;\n  height: 30px;\n  padding-top: 2px;\n}\n\n.card-header {\n  color: #8e8e8e;\n  background-color: rgba(169, 188, 226, 0.1);\n}\n\n.card-header p {\n  font-size: 14px;\n}\n\n.card-content {\n  color: #8e8e8e;\n  padding-top: 10px;\n}\n\n.card-title {\n  text-align: center;\n  flex: 1 0 auto;\n  color: white;\n  font-size: 16px;\n  text-transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzLWNhdXNhcy9EOlxcRG93bmxvYWRzXFxQcnVlYmEgbG9naW5cXHBvcnRhbC11bmlmaWNhZG8tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxtaXMtY2F1c2FzXFxtaXMtY2F1c2FzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9taXMtY2F1c2FzL21pcy1jYXVzYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FET0E7RUFDRSxtQkFBQTtBQ0pGOztBRE9BO0VBR0Usa0JBQUE7QUNKRjs7QURPQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FDTEY7O0FET0U7RUFDRSxlQUFBO0FDTEo7O0FEU0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pcy1jYXVzYXMvbWlzLWNhdXNhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvc2Fzcy9zY3NzL2Z1bmNpb25lc1wiO1xyXG5AaW1wb3J0IFwiLi9zcmMvYXNzZXRzL3Nhc3Mvc2Nzcy9jb3JlL2FwcC1jb2xvcnNcIjtcclxuXHJcbi5idG4tY29tcGV0ZW5jaWF7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICNjM2VhZmY7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5kaXYtcGFkcmV7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDlweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXYtcGFkcmVze1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXYtaGlqb3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8vbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2FtYmlvLWxldHJhe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi0tcmVkIHtcclxuICBiYWNrZ3JvdW5kOiAjNjVCQjY5O1xyXG59XHJcblxyXG4uYnRuLS1yYWRpdXMge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnJvbC1jYXVzYXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGhlaWdodDogMzdweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItZnVuY3Rpb24oXCJtb3JhZG8tMlwiLCBcImJhc2VcIik7XHJcbiAgY29sb3I6IGNvbG9yLWZ1bmN0aW9uKFwiZ3Jpc1wiLCBcImJhc2VcIik7XHJcbn1cclxuXHJcbi5jYXJkLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjBhOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogcmdiYSgwLCAwLCAwLCAwLjEzKSAxcHggc29saWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBjb2xvcjogY29sb3ItZnVuY3Rpb24oXCJncmlzXCIsIFwiYmFzZVwiKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGNvbG9yLWZ1bmN0aW9uKFwibW9yYWRvLTRcIiwgXCJiYXNlXCIpLCAwLjEpO1xyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIGNvbG9yOiBjb2xvci1mdW5jdGlvbihcImdyaXNcIiwgXCJiYXNlXCIpO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuYnRuLWNvbXBldGVuY2lhIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5kaXYtcGFkcmUge1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGl2LXBhZHJlcyB7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXYtaGlqbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYW1iaW8tbGV0cmEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tLXJlZCB7XG4gIGJhY2tncm91bmQ6ICM2NUJCNjk7XG59XG5cbi5idG4tLXJhZGl1cyB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ucm9sLWNhdXNhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAzN3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZmODNiZjtcbiAgY29sb3I6ICM4ZThlOGU7XG59XG5cbi5jYXJkLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzYwYTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogcmdiYSgwLCAwLCAwLCAwLjEzKSAxcHggc29saWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgY29sb3I6ICM4ZThlOGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxODgsIDIyNiwgMC4xKTtcbn1cbi5jYXJkLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgY29sb3I6ICM4ZThlOGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleDogMSAwIGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mis-causas/mis-causas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/mis-causas/mis-causas.component.ts ***!
  \**********************************************************/
/*! exports provided: MisCausasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisCausasComponent", function() { return MisCausasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_competencia_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/competencia-service.service */ "./src/app/services/competencia-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grilla_mis_causas_grilla_mis_causas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grilla-mis-causas/grilla-mis-causas.component */ "./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component.ts");
/* harmony import */ var _models_causa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/causa */ "./src/app/models/causa.ts");






let MisCausasComponent = class MisCausasComponent {
    constructor(competenciaService) {
        this.competenciaService = competenciaService;
        this.competencias = [];
        this.causa = [];
        this.cantidades = 0;
        this.cantiCivil = 0;
        this.cantiLaboral = 0;
        this.cantiCobranza = 0;
        this.cantCausas = [];
    }
    ngOnInit() {
        this.listarCompetencia();
        const data = JSON.parse(sessionStorage.getItem('UsuarioLogin'));
        this.idUsuario = data.id;
    }
    listarCompetencia() {
        this.competenciaService.listarCompetencia().subscribe(data => {
            if (data != null) {
                this.competencias = data;
            }
        });
    }
    llenarGrilla() {
        if (this.competencia != undefined && this.fechaInicio != undefined && this.fechaFinal != undefined) {
            if (this.competencia.length != 0) {
                const causa = new _models_causa__WEBPACK_IMPORTED_MODULE_5__["Causa"];
                causa.idUsuario = this.idUsuario;
                causa.competencias = this.competencia;
                causa.fechaInicio = this.fechaInicio;
                causa.fechaFinal = this.fechaFinal;
                this.grillaMisCausas.llenarGrillaMisCausas(causa);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Info',
                    text: 'Debe llenar todos los campos para continuar.',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Info',
                text: 'Debe llenar todos los campos para continuar.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    }
    recibirCantidad($event) {
        this.cantidades = $event;
    }
    recibeCausas($event) {
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
        }
        else {
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
    validarFechas() {
        this.validaFechaInicio = new Date(this.fechaInicio);
        this.validaFechaFinal = new Date(this.fechaFinal);
        const fechaInicioValida = (this.validaFechaInicio.getUTCMonth() + 1);
        const fechaFinalValida = (this.validaFechaFinal.getUTCMonth() + 1);
        const hoy = new Date();
        if ((fechaFinalValida - fechaInicioValida) > 3) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Info',
                text: 'Periodo no puede ser mayor a 3 meses.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
        else {
            this.llenarGrilla();
        }
    }
};
MisCausasComponent.ctorParameters = () => [
    { type: _services_competencia_service_service__WEBPACK_IMPORTED_MODULE_2__["CompetenciaServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_grilla_mis_causas_grilla_mis_causas_component__WEBPACK_IMPORTED_MODULE_4__["GrillaMisCausasComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grilla_mis_causas_grilla_mis_causas_component__WEBPACK_IMPORTED_MODULE_4__["GrillaMisCausasComponent"])
], MisCausasComponent.prototype, "grillaMisCausas", void 0);
MisCausasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-causas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mis-causas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/mis-causas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mis-causas.component.scss */ "./src/app/pages/mis-causas/mis-causas.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_competencia_service_service__WEBPACK_IMPORTED_MODULE_2__["CompetenciaServiceService"]])
], MisCausasComponent);



/***/ }),

/***/ "./src/app/pages/mis-causas/mis-causas.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mis-causas/mis-causas.module.ts ***!
  \*******************************************************/
/*! exports provided: MisCausasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisCausasModule", function() { return MisCausasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mis_causas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-causas-routing.module */ "./src/app/pages/mis-causas/mis-causas-routing.module.ts");
/* harmony import */ var _mis_causas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mis-causas.component */ "./src/app/pages/mis-causas/mis-causas.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _grilla_mis_causas_grilla_mis_causas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grilla-mis-causas/grilla-mis-causas.module */ "./src/app/pages/mis-causas/grilla-mis-causas/grilla-mis-causas.module.ts");
/* harmony import */ var _tarjetas_causas_competencia_tarjetas_causas_competencia_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tarjetas-causas-competencia/tarjetas-causas-competencia.module */ "./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.module.ts");










let MisCausasModule = class MisCausasModule {
};
MisCausasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mis_causas_component__WEBPACK_IMPORTED_MODULE_4__["MisCausasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _mis_causas_routing_module__WEBPACK_IMPORTED_MODULE_3__["MisCausasRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _tarjetas_causas_competencia_tarjetas_causas_competencia_module__WEBPACK_IMPORTED_MODULE_9__["TarjetasCausasCompetenciaModule"],
            _grilla_mis_causas_grilla_mis_causas_module__WEBPACK_IMPORTED_MODULE_8__["GrillaMisCausasModule"]
        ]
    })
], MisCausasModule);



/***/ }),

/***/ "./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color-todos {\n  background: #0083A2;\n  margin-right: 20px;\n  margin-top: 10px;\n}\n\n.card-body {\n  height: 32px;\n  width: 100%;\n  padding: 0.25rem;\n  border-color: black;\n}\n\n.texto {\n  color: #ffffff;\n}\n\n.div-hijo {\n  margin-top: 10px;\n}\n\n.div-padre {\n  margin: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n  margin-left: 100px;\n}\n\n.card {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzLWNhdXNhcy90YXJqZXRhcy1jYXVzYXMtY29tcGV0ZW5jaWEvRDpcXERvd25sb2Fkc1xcUHJ1ZWJhIGxvZ2luXFxwb3J0YWwtdW5pZmljYWRvLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbWlzLWNhdXNhc1xcdGFyamV0YXMtY2F1c2FzLWNvbXBldGVuY2lhXFx0YXJqZXRhcy1jYXVzYXMtY29tcGV0ZW5jaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21pcy1jYXVzYXMvdGFyamV0YXMtY2F1c2FzLWNvbXBldGVuY2lhL3RhcmpldGFzLWNhdXNhcy1jb21wZXRlbmNpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pcy1jYXVzYXMvdGFyamV0YXMtY2F1c2FzLWNvbXBldGVuY2lhL3RhcmpldGFzLWNhdXNhcy1jb21wZXRlbmNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci10b2Rvc3tcclxuICBiYWNrZ3JvdW5kOiAjMDA4M0EyO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmRpdi1oaWpve1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5kaXYtcGFkcmV7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4iLCIuY29sb3ItdG9kb3Mge1xuICBiYWNrZ3JvdW5kOiAjMDA4M0EyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4udGV4dG8ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRpdi1oaWpvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRpdi1wYWRyZSB7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TarjetasCausasCompetenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetasCausasCompetenciaComponent", function() { return TarjetasCausasCompetenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TarjetasCausasCompetenciaComponent = class TarjetasCausasCompetenciaComponent {
    constructor() {
        this.competencias = [];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TarjetasCausasCompetenciaComponent.prototype, "competencias", void 0);
TarjetasCausasCompetenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tarjetas-causas-competencia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tarjetas-causas-competencia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tarjetas-causas-competencia.component.scss */ "./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TarjetasCausasCompetenciaComponent);



/***/ }),

/***/ "./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: TarjetasCausasCompetenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetasCausasCompetenciaModule", function() { return TarjetasCausasCompetenciaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tarjetas_causas_competencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tarjetas-causas-competencia.component */ "./src/app/pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component.ts");




let TarjetasCausasCompetenciaModule = class TarjetasCausasCompetenciaModule {
};
TarjetasCausasCompetenciaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tarjetas_causas_competencia_component__WEBPACK_IMPORTED_MODULE_3__["TarjetasCausasCompetenciaComponent"]],
        exports: [
            _tarjetas_causas_competencia_component__WEBPACK_IMPORTED_MODULE_3__["TarjetasCausasCompetenciaComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], TarjetasCausasCompetenciaModule);



/***/ })

}]);
//# sourceMappingURL=pages-mis-causas-mis-causas-module-es2015.js.map