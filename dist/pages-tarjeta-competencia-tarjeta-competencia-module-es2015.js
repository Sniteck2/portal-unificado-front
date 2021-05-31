(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tarjeta-competencia-tarjeta-competencia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grilla-portal/grilla-portal.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grilla-portal/grilla-portal.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-bordered table-responsive-sm table-hover table-sm\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n  <thead class=\"fondo-grilla\">\n    <tr>\n      <th>Competencia</th>\n      <th>Rit</th>\n      <th>Tribunal</th>\n      <th>Caratulado</th>\n      <th>Fecha de Ingreso</th>\n      <th>Institución</th>\n      <th>Trámites</th>\n    </tr>\n  </thead>\n  <tbody>\n  <ng-container>\n    <tr *ngFor=\"let item of causas\">\n      <td>{{item.competenciaVO.glosa}}</td>\n      <td>{{item.tipoCausa}}-{{item.rolCausa}}-{{item.eraCausa}}</td>\n      <td>{{item.tribunalVO.glosa}}</td>\n      <td>{{item.glosaParte}}</td>\n      <td>{{item.fechaIngresoCausa | date: 'dd/MM/yyyy'}}</td>\n      <td>--</td>\n      <td class=\"centrado\"><input type=\"image\" class=\"imagen\" src=\"assets/img/gallery/lupa.png\" (click)=\"open(tramite, item.id)\"/></td>\n    </tr>\n  </ng-container>\n  </tbody>\n</table>\n\n<ng-template let-modal #tramite>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Detalle Trámite</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-modal-resumen-tramite [causa]=\"causa\">\n\n    </app-modal-resumen-tramite>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-bar\">\n    <div class=\"card-title\">\n      <b>Consultar Causas</b>\n    </div>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\">\n        <div class=\"row justify-content-center\">\n          <div class=\"div-padre\">\n            <div class=\"div-hijo\">\n              <label><b>Seleccione Competencia:</b></label>\n            </div>\n            <div class=\"col-md-2\">\n              <ng-select [(ngModel)]=\"competencia\"\n                         (change)=\"cambioTribunales();\"\n                         placeholder=\"Competencia\">\n                <ng-option *ngFor=\"let item of competencias\" [value]=\"item.id\">{{item.glosa}}</ng-option>\n              </ng-select>\n            </div>\n            <div class=\"div-hijo\">\n              <label><b>Seleccione Tribunal:</b></label>\n            </div>\n            <div class=\"col-md-4\">\n              <ng-select [(ngModel)]=\"tribunal\" placeholder=\"Tribunal\">\n                <ng-option *ngFor=\"let item of tribunales\" [value]=\"item.id\">{{item.glosa}}</ng-option>\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"div-padre\">\n            <div class=\"div-hijo\">\n              <label><b>Filtro por rol de la causa:</b></label>&nbsp;&nbsp;&nbsp;\n            </div>\n            <div class=\"div-hijo\">\n              <ng-select [(ngModel)]=\"tipoCausa\" placeholder=\"Tipo Causa\">\n                <ng-option *ngFor=\"let item of tipoCausas\" [value]=\"item.tipoCausa\">{{item.tipoCausa}}</ng-option>\n              </ng-select>\n            </div>\n            <div class=\"div-hijo\">\n              <input [(ngModel)]=\"rolCausa\" type=\"number\" class=\"rol-causa\" placeholder=\"rol causa\">\n            </div>\n            <div class=\" div-hijo col-md-2\">\n              <ng-select placeholder=\"Año\" [(ngModel)]=\"anio\">\n                <ng-option *ngFor=\"let item of anios\" [value]=\"item.anioo\">{{item.anioo}}</ng-option>\n              </ng-select>\n            </div>\n            <div class=\"div-hijo\">\n              <button (click)=\"buscar()\" type=\"button\" class=\"btn btn--radius btn--red\">Buscar</button>\n            </div>\n          </div>\n          <br><br>\n          <div class=\"col-md-12\" style=\"margin-top: 50px\">\n            <div class=\"card\">\n              <div class=\"card-bar\">\n                <div class=\"card-title\">\n                  <b>Causas</b>\n                </div>\n              </div>\n              <div class=\"card-content\">\n                <br>\n                <app-grilla-portal>\n\n                </app-grilla-portal>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br>\n</div>\n\n\n\n");

/***/ }),

/***/ "./src/app/pages/grilla-portal/grilla-portal.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/grilla-portal/grilla-portal.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cambio-letra {\n  color: white;\n}\n\n.fondo-grilla {\n  background-color: #5360a9;\n  color: white;\n}\n\n.dataTables_wrapper .dataTables_paginate .paginate_button:hover {\n  background: none;\n  color: black !important;\n  border-radius: 4px;\n  border: 1px solid #828282;\n}\n\n.dataTables_wrapper .dataTables_paginate .paginate_button:active {\n  background: none;\n  color: black !important;\n}\n\n.imagen {\n  width: 40px;\n}\n\n.centrado {\n  text-align: center;\n}\n\nth {\n  background-color: #6f82bf;\n  color: #fff;\n  font-weight: 500;\n  font-size: 16px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpbGxhLXBvcnRhbC9EOlxcRG93bmxvYWRzXFxQcnVlYmEgbG9naW5cXHBvcnRhbC11bmlmaWNhZG8tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxncmlsbGEtcG9ydGFsXFxncmlsbGEtcG9ydGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlsbGEtcG9ydGFsL2dyaWxsYS1wb3J0YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JpbGxhLXBvcnRhbC9ncmlsbGEtcG9ydGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbWJpby1sZXRyYXtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb25kby1ncmlsbGF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjBhOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODI4MjgyO1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIC5wYWdpbmF0ZV9idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vLy9cclxuXHJcbi5pbWFnZW57XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5jZW50cmFkb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZjgyYmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG5cclxuIiwiLmNhbWJpby1sZXRyYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvbmRvLWdyaWxsYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzYwYTk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgyODI4Mjtcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY4MmJmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/grilla-portal/grilla-portal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/grilla-portal/grilla-portal.component.ts ***!
  \****************************************************************/
/*! exports provided: GrillaPortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaPortalComponent", function() { return GrillaPortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _models_causa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/causa */ "./src/app/models/causa.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_causa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/causa.service */ "./src/app/services/causa.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let GrillaPortalComponent = class GrillaPortalComponent {
    constructor(causaService, modal) {
        this.causaService = causaService;
        this.modal = modal;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.causas = [];
        this.causa = new _models_causa__WEBPACK_IMPORTED_MODULE_4__["Causa"]();
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
    llenarGrilla(competencia, tribunal, tipoCausa, anio, rolCausa) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            imageUrl: 'assets/img/gallery/loading.gif',
            showConfirmButton: false
        });
        this.causaService.buscarCausa(competencia, tribunal, tipoCausa, rolCausa, anio).subscribe(data => {
            if (data.id != -1) {
                this.causas = [];
                const causa = new _models_causa__WEBPACK_IMPORTED_MODULE_4__["Causa"]();
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Info',
                    text: 'Causa no encontrada',
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                });
            }
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Error',
                text: 'Reintente mas tarde',
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
    open(content, idCausa) {
        this.causas.forEach(c => {
            if (c.id === idCausa) {
                this.causa = c;
            }
        });
        this.modal.open(content, { size: 'xl' });
    }
};
GrillaPortalComponent.ctorParameters = () => [
    { type: _services_causa_service__WEBPACK_IMPORTED_MODULE_6__["CausaService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { read: false, static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
], GrillaPortalComponent.prototype, "dtElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_causa__WEBPACK_IMPORTED_MODULE_4__["Causa"])
], GrillaPortalComponent.prototype, "causa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GrillaPortalComponent.prototype, "idCausa", void 0);
GrillaPortalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grilla-portal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grilla-portal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grilla-portal/grilla-portal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grilla-portal.component.scss */ "./src/app/pages/grilla-portal/grilla-portal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_causa_service__WEBPACK_IMPORTED_MODULE_6__["CausaService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
], GrillaPortalComponent);



/***/ }),

/***/ "./src/app/pages/grilla-portal/grilla-portal.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/grilla-portal/grilla-portal.module.ts ***!
  \*************************************************************/
/*! exports provided: GrillaPortalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaPortalModule", function() { return GrillaPortalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _grilla_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grilla-portal.component */ "./src/app/pages/grilla-portal/grilla-portal.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _modal_resumen_tramite_modal_resumen_tramite_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-resumen-tramite/modal-resumen-tramite.module */ "./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.module.ts");






let GrillaPortalModule = class GrillaPortalModule {
};
GrillaPortalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_grilla_portal_component__WEBPACK_IMPORTED_MODULE_3__["GrillaPortalComponent"]],
        exports: [_grilla_portal_component__WEBPACK_IMPORTED_MODULE_3__["GrillaPortalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _modal_resumen_tramite_modal_resumen_tramite_module__WEBPACK_IMPORTED_MODULE_5__["ModalResumenTramiteModule"]
        ]
    })
], GrillaPortalModule);



/***/ }),

/***/ "./src/app/pages/tarjeta-competencia/tarjeta-competencia-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tarjeta-competencia/tarjeta-competencia-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TarjetaCompetenciaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaCompetenciaRoutingModule", function() { return TarjetaCompetenciaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tarjeta_competencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tarjeta-competencia.component */ "./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.ts");




const routes = [
    {
        path: '',
        component: _tarjeta_competencia_component__WEBPACK_IMPORTED_MODULE_3__["TarjetaCompetenciaComponent"]
    }
];
let TarjetaCompetenciaRoutingModule = class TarjetaCompetenciaRoutingModule {
};
TarjetaCompetenciaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TarjetaCompetenciaRoutingModule);



/***/ }),

/***/ "./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-competencia {\n  color: #000000 !important;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  height: 36px;\n}\n\n.div-padre {\n  margin: 10px;\n  margin-left: 251px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n}\n\n.div-hijo {\n  margin-top: 10px;\n  margin-right: 30px;\n}\n\n.cambio-letra {\n  color: white;\n}\n\n.btn--red {\n  background: #65BB69;\n}\n\n.btn--radius {\n  border-radius: 3px;\n}\n\n.rol-causa {\n  border: 1px solid #ccc;\n  height: 37px;\n  border-radius: 4px;\n}\n\n.card {\n  border: 1px solid #6f83bf;\n  color: #8e8e8e;\n}\n\n.card-bar {\n  background-color: #5360a9;\n  color: white;\n  border-bottom: rgba(0, 0, 0, 0.13) 1px solid;\n  display: flex;\n  height: 30px;\n  padding-top: 2px;\n}\n\n.card-header {\n  color: #8e8e8e;\n  background-color: rgba(169, 188, 226, 0.1);\n}\n\n.card-header p {\n  font-size: 14px;\n}\n\n.card-content {\n  color: #8e8e8e;\n  padding-top: 10px;\n}\n\n.card-title {\n  text-align: center;\n  flex: 1 0 auto;\n  color: white;\n  font-size: 16px;\n  text-transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFyamV0YS1jb21wZXRlbmNpYS9EOlxcRG93bmxvYWRzXFxQcnVlYmEgbG9naW5cXHBvcnRhbC11bmlmaWNhZG8tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFx0YXJqZXRhLWNvbXBldGVuY2lhXFx0YXJqZXRhLWNvbXBldGVuY2lhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YXJqZXRhLWNvbXBldGVuY2lhL3RhcmpldGEtY29tcGV0ZW5jaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBR0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEY7O0FET0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FDSkY7O0FETUU7RUFDRSxlQUFBO0FDSko7O0FEUUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhcmpldGEtY29tcGV0ZW5jaWEvdGFyamV0YS1jb21wZXRlbmNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvc2Fzcy9zY3NzL2Z1bmNpb25lc1wiO1xyXG5AaW1wb3J0IFwiLi9zcmMvYXNzZXRzL3Nhc3Mvc2Nzcy9jb3JlL2FwcC1jb2xvcnNcIjtcclxuXHJcbi5idG4tY29tcGV0ZW5jaWF7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICNjM2VhZmY7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5kaXYtcGFkcmV7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNTFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXYtaGlqb3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmNhbWJpby1sZXRyYXtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tLXJlZCB7XHJcbiAgYmFja2dyb3VuZDogIzY1QkI2OTtcclxufVxyXG5cclxuLmJ0bi0tcmFkaXVzIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5yb2wtY2F1c2F7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBoZWlnaHQ6IDM3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLWZ1bmN0aW9uKFwibW9yYWRvLTJcIiwgXCJiYXNlXCIpO1xyXG4gIGNvbG9yOiBjb2xvci1mdW5jdGlvbihcImdyaXNcIiwgXCJiYXNlXCIpO1xyXG59XHJcblxyXG4uY2FyZC1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzYwYTk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IHJnYmEoMCwgMCwgMCwgMC4xMykgMXB4IHNvbGlkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6IGNvbG9yLWZ1bmN0aW9uKFwiZ3Jpc1wiLCBcImJhc2VcIik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShjb2xvci1mdW5jdGlvbihcIm1vcmFkby00XCIsIFwiYmFzZVwiKSwgMC4xKTtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBjb2xvcjogY29sb3ItZnVuY3Rpb24oXCJncmlzXCIsIFwiYmFzZVwiKTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmJ0bi1jb21wZXRlbmNpYSB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4uZGl2LXBhZHJlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjUxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpdi1oaWpvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uY2FtYmlvLWxldHJhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLS1yZWQge1xuICBiYWNrZ3JvdW5kOiAjNjVCQjY5O1xufVxuXG4uYnRuLS1yYWRpdXMge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnJvbC1jYXVzYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogMzdweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZjgzYmY7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY2FyZC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2MGE5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IHJnYmEoMCwgMCwgMCwgMC4xMykgMXB4IHNvbGlkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiAjOGU4ZThlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OSwgMTg4LCAyMjYsIDAuMSk7XG59XG4uY2FyZC1oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.ts ***!
  \****************************************************************************/
/*! exports provided: TarjetaCompetenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaCompetenciaComponent", function() { return TarjetaCompetenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_competencia_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/competencia-service.service */ "./src/app/services/competencia-service.service.ts");
/* harmony import */ var _services_tribunal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tribunal.service */ "./src/app/services/tribunal.service.ts");
/* harmony import */ var _services_tipo_causa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tipo-causa.service */ "./src/app/services/tipo-causa.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _grilla_portal_grilla_portal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grilla-portal/grilla-portal.component */ "./src/app/pages/grilla-portal/grilla-portal.component.ts");







let TarjetaCompetenciaComponent = class TarjetaCompetenciaComponent {
    constructor(competenciaService, tribunalService, tipoCausaService) {
        this.competenciaService = competenciaService;
        this.tribunalService = tribunalService;
        this.tipoCausaService = tipoCausaService;
        this.competencias = [];
        this.tribunales = [];
        this.tipoCausas = [];
        this.anios = [
            { anioo: 2021 },
            { anioo: 2020 },
            { anioo: 2019 },
            { anioo: 2018 }
        ];
    }
    ngOnInit() {
        this.listarCompetencia();
    }
    listarCompetencia() {
        this.competenciaService.listarCompetencia().subscribe(data => {
            if (data != null) {
                this.competencias = data;
            }
        });
    }
    cambioTribunales() {
        if (this.competencia != null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                imageUrl: 'assets/img/gallery/loading.gif',
                showConfirmButton: false
            });
            this.tribunalService.listarTribunalesPorCompetencia(this.competencia).subscribe(data => {
                if (data != null) {
                    this.tribunales = data;
                    this.cambioTipoCausa();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                }
            });
        }
    }
    cambioTipoCausa() {
        this.tipoCausaService.listarTipoCausaPorCompetencia(this.competencia).subscribe(data => {
            if (data != null) {
                this.tipoCausas = data;
            }
        });
    }
    buscar() {
        if (this.competencia != undefined && this.tribunal != undefined && this.tipoCausa != null
            && this.rolCausa != undefined && this.anio != undefined) {
            this.grillaPortal.llenarGrilla(this.competencia, this.tribunal, this.tipoCausa, this.anio, this.rolCausa);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Advertencia',
                text: 'Debe llenar todos los campos',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    }
};
TarjetaCompetenciaComponent.ctorParameters = () => [
    { type: _services_competencia_service_service__WEBPACK_IMPORTED_MODULE_2__["CompetenciaServiceService"] },
    { type: _services_tribunal_service__WEBPACK_IMPORTED_MODULE_3__["TribunalService"] },
    { type: _services_tipo_causa_service__WEBPACK_IMPORTED_MODULE_4__["TipoCausaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_grilla_portal_grilla_portal_component__WEBPACK_IMPORTED_MODULE_6__["GrillaPortalComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grilla_portal_grilla_portal_component__WEBPACK_IMPORTED_MODULE_6__["GrillaPortalComponent"])
], TarjetaCompetenciaComponent.prototype, "grillaPortal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TarjetaCompetenciaComponent.prototype, "competencias", void 0);
TarjetaCompetenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tarjeta-competencia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tarjeta-competencia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tarjeta-competencia.component.scss */ "./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_competencia_service_service__WEBPACK_IMPORTED_MODULE_2__["CompetenciaServiceService"],
        _services_tribunal_service__WEBPACK_IMPORTED_MODULE_3__["TribunalService"],
        _services_tipo_causa_service__WEBPACK_IMPORTED_MODULE_4__["TipoCausaService"]])
], TarjetaCompetenciaComponent);



/***/ }),

/***/ "./src/app/pages/tarjeta-competencia/tarjeta-competencia.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tarjeta-competencia/tarjeta-competencia.module.ts ***!
  \*************************************************************************/
/*! exports provided: TarjetaCompetenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaCompetenciaModule", function() { return TarjetaCompetenciaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tarjeta_competencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tarjeta-competencia.component */ "./src/app/pages/tarjeta-competencia/tarjeta-competencia.component.ts");
/* harmony import */ var _tarjeta_competencia_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tarjeta-competencia-routing.module */ "./src/app/pages/tarjeta-competencia/tarjeta-competencia-routing.module.ts");
/* harmony import */ var _grilla_portal_grilla_portal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grilla-portal/grilla-portal.module */ "./src/app/pages/grilla-portal/grilla-portal.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let TarjetaCompetenciaModule = class TarjetaCompetenciaModule {
};
TarjetaCompetenciaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tarjeta_competencia_component__WEBPACK_IMPORTED_MODULE_3__["TarjetaCompetenciaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tarjeta_competencia_routing_module__WEBPACK_IMPORTED_MODULE_4__["TarjetaCompetenciaRoutingModule"],
            _grilla_portal_grilla_portal_module__WEBPACK_IMPORTED_MODULE_5__["GrillaPortalModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]
    })
], TarjetaCompetenciaModule);



/***/ }),

/***/ "./src/app/services/tipo-causa.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/tipo-causa.service.ts ***!
  \************************************************/
/*! exports provided: TipoCausaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCausaService", function() { return TipoCausaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let TipoCausaService = class TipoCausaService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'competencia-tipo-causa';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    listarTipoCausaPorCompetencia(idCompetencia) {
        return this.http.get(this.url + '/listar-comp-tipo-causa/' + idCompetencia);
    }
};
TipoCausaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TipoCausaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TipoCausaService);



/***/ }),

/***/ "./src/app/services/tribunal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/tribunal.service.ts ***!
  \**********************************************/
/*! exports provided: TribunalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TribunalService", function() { return TribunalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let TribunalService = class TribunalService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'tribunal-competencia/';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    listarTribunalesPorCompetencia(idCompetencia) {
        return this.http.get(this.url + 'tribunal-por-competencia/' + idCompetencia);
    }
};
TribunalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TribunalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TribunalService);



/***/ })

}]);
//# sourceMappingURL=pages-tarjeta-competencia-tarjeta-competencia-module-es2015.js.map