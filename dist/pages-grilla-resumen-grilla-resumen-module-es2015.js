(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grilla-resumen-grilla-resumen-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grilla-resumen/grilla-resumen.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grilla-resumen/grilla-resumen.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-bar\">\n    <div class=\"card-title\">\n      <b>Resumen Migración</b>\n    </div>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"col-md-12\">\n      <h4><p class=\"centrado titulo\">Resumen de tabla RTO_CAUSA</p></h4>\n      <div class=\"col-md-12\">\n        <table [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\"\n               class=\"table table-bordered table-responsive-sm table-hover table-sm\"\n               datatable id=\"causa\">\n          <thead class=\"fondo-grilla\">\n          <tr>\n            <th>Fecha de inicio</th>\n            <th>Fecha de termino</th>\n            <th>Total registros base</th>\n            <th>Total registros base estimada</th>\n            <th>Total registros portal</th>\n            <th>Tiempo/seg.</th>\n          </tr>\n          </thead>\n          <tbody>\n          <ng-container>\n            <tr *ngFor=\"let item of resumenCausa\">\n              <td>{{item.fechaInicio | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.fechaTermino | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.totalRegistroBase}}</td>\n              <td>{{item.totalRegistroBaseEstimada}}</td>\n              <td>{{item.totalRegistroPortal}}</td>\n              <td>{{item.tiempo}}</td>\n            </tr>\n          </ng-container>\n          </tbody>\n        </table>\n      </div>\n      <h4><p class=\"centrado titulo\">Resumen de tabla RTO_CUADERNO</p></h4>\n      <div class=\"col-md-12\">\n        <table [dtOptions]=\"dtOptions[1]\" [dtTrigger]=\"dtTrigger\"\n               class=\"table table-bordered table-responsive-sm table-hover table-sm\"\n               datatable id=\"cuaderno\">\n          <thead class=\"fondo-grilla\">\n          <tr>\n            <th>Fecha de inicio</th>\n            <th>Fecha de termino</th>\n            <th>Total registros base</th>\n            <th>Total registros base estimada</th>\n            <th>Total registros portal</th>\n            <th>Tiempo/seg.</th>\n          </tr>\n          </thead>\n          <tbody>\n          <ng-container>\n            <tr *ngFor=\"let item of resumenCuaderno\">\n              <td>{{item.fechaInicio | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.fechaTermino | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.totalRegistroBase}}</td>\n              <td>{{item.totalRegistroBaseEstimada}}</td>\n              <td>{{item.totalRegistroPortal}}</td>\n              <td>{{item.tiempo}}</td>\n            </tr>\n          </ng-container>\n          </tbody>\n        </table>\n      </div>\n      <h4><p class=\"centrado titulo\">Resumen de tabla RTO_ESCRITO</p></h4>\n      <div class=\"col-md-12\">\n        <table [dtOptions]=\"dtOptions[2]\" [dtTrigger]=\"dtTrigger\"\n               class=\"table table-bordered table-responsive-sm table-hover table-sm\"\n               datatable id=\"escrito\">\n          <thead class=\"fondo-grilla\">\n          <tr>\n            <th>Fecha de inicio</th>\n            <th>Fecha de termino</th>\n            <th>Total registros base</th>\n            <th>Total registros base estimada</th>\n            <th>Total registros portal</th>\n            <th>Tiempo/seg.</th>\n          </tr>\n          </thead>\n          <tbody>\n          <ng-container>\n            <tr *ngFor=\"let item of resumenEscrito\">\n              <td>{{item.fechaInicio | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.fechaTermino | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.totalRegistroBase}}</td>\n              <td>{{item.totalRegistroBaseEstimada}}</td>\n              <td>{{item.totalRegistroPortal}}</td>\n              <td>{{item.tiempo}}</td>\n            </tr>\n          </ng-container>\n          </tbody>\n        </table>\n      </div>\n      <h4><p class=\"centrado titulo\">Resumen de tabla RTO_PARTE</p></h4>\n      <div class=\"col-md-12\">\n        <table [dtOptions]=\"dtOptions[3]\" [dtTrigger]=\"dtTrigger\"\n               class=\"table table-bordered table-responsive-sm table-hover table-sm\"\n               datatable id=\"parte\">\n          <thead class=\"fondo-grilla\">\n          <tr>\n            <th>Fecha de inicio</th>\n            <th>Fecha de termino</th>\n            <th>Total registros base</th>\n            <th>Total registros base estimada</th>\n            <th>Total registros portal</th>\n            <th>Tiempo/seg.</th>\n          </tr>\n          </thead>\n          <tbody>\n          <ng-container>\n            <tr *ngFor=\"let item of resumenParte\">\n              <td>{{item.fechaInicio | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.fechaTermino | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.totalRegistroBase}}</td>\n              <td>{{item.totalRegistroBaseEstimada}}</td>\n              <td>{{item.totalRegistroPortal}}</td>\n              <td>{{item.tiempo}}</td>\n            </tr>\n          </ng-container>\n          </tbody>\n        </table>\n      </div>\n      <h4><p class=\"centrado titulo\">Resumen de tabla RTO_TRAMITE</p></h4>\n      <div class=\"col-md-12\">\n        <table [dtOptions]=\"dtOptions[4]\" [dtTrigger]=\"dtTrigger\"\n               class=\"table table-bordered table-responsive-sm table-hover table-sm\"\n               datatable id=\"tramite\">\n          <thead class=\"fondo-grilla\">\n          <tr>\n            <th>Fecha de inicio</th>\n            <th>Fecha de termino</th>\n            <th>Total registros base</th>\n            <th>Total registros base estimada</th>\n            <th>Total registros portal</th>\n            <th>Tiempo/seg.</th>\n          </tr>\n          </thead>\n          <tbody>\n          <ng-container>\n            <tr *ngFor=\"let item of resumenTramite\">\n              <td>{{item.fechaInicio | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.fechaTermino | date: 'dd/MM/yyyy'}}</td>\n              <td>{{item.totalRegistroBase}}</td>\n              <td>{{item.totalRegistroBaseEstimada}}</td>\n              <td>{{item.totalRegistroPortal}}</td>\n              <td>{{item.tiempo}}</td>\n            </tr>\n          </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <br><br>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/pages/grilla-resumen/grilla-resumen-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/grilla-resumen/grilla-resumen-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GrillaResumenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaResumenRoutingModule", function() { return GrillaResumenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _grilla_resumen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grilla-resumen.component */ "./src/app/pages/grilla-resumen/grilla-resumen.component.ts");




const routes = [
    {
        path: '',
        component: _grilla_resumen_component__WEBPACK_IMPORTED_MODULE_3__["GrillaResumenComponent"]
    }
];
let GrillaResumenRoutingModule = class GrillaResumenRoutingModule {
};
GrillaResumenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GrillaResumenRoutingModule);



/***/ }),

/***/ "./src/app/pages/grilla-resumen/grilla-resumen.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/grilla-resumen/grilla-resumen.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  background-color: #6f82bf;\n  color: #fff;\n  font-weight: 500;\n  font-size: 16px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n.centrado {\n  margin: auto;\n  text-align: center;\n}\n\n.titulo {\n  color: #0B173B;\n}\n\n/*-----------------------------------------*/\n\n.card {\n  border: 1px solid #6f83bf;\n  color: #8e8e8e;\n}\n\n.card-bar {\n  background-color: #5360a9;\n  color: white;\n  border-bottom: rgba(0, 0, 0, 0.13) 1px solid;\n  display: flex;\n  height: 30px;\n  padding-top: 2px;\n}\n\n.card-header {\n  color: #8e8e8e;\n  background-color: rgba(169, 188, 226, 0.1);\n}\n\n.card-header p {\n  font-size: 14px;\n}\n\n.card-content {\n  color: #8e8e8e;\n  padding-top: 10px;\n}\n\n.card-background-light {\n  background-image: url(\"/src/assets/img/card-background-light.png\") !important;\n}\n\n.card-background {\n  background-image: url(\"/src/assets/img/card-background.png\") !important;\n}\n\n.card-title {\n  text-align: center;\n  flex: 1 0 auto;\n  color: white;\n  font-size: 16px;\n  text-transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpbGxhLXJlc3VtZW4vRDpcXERvd25sb2Fkc1xcUHJ1ZWJhIGxvZ2luXFxwb3J0YWwtdW5pZmljYWRvLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcZ3JpbGxhLXJlc3VtZW5cXGdyaWxsYS1yZXN1bWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlsbGEtcmVzdW1lbi9ncmlsbGEtcmVzdW1lbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBLDRDQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBRE1BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSw2RUFBQTtBQ0hGOztBRE1BO0VBQ0UsdUVBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyaWxsYS1yZXN1bWVuL2dyaWxsYS1yZXN1bWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9zYXNzL3Njc3MvZnVuY2lvbmVzXCI7XHJcbkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvc2Fzcy9zY3NzL2NvcmUvYXBwLWNvbG9yc1wiO1xyXG5cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmODJiZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jZW50cmFkb3tcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gIGNvbG9yOiAjMEIxNzNCO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLWZ1bmN0aW9uKFwibW9yYWRvLTJcIiwgXCJiYXNlXCIpO1xyXG4gIGNvbG9yOiBjb2xvci1mdW5jdGlvbihcImdyaXNcIiwgXCJiYXNlXCIpO1xyXG59XHJcblxyXG4uY2FyZC1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzYwYTk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IHJnYmEoMCwgMCwgMCwgMC4xMykgMXB4IHNvbGlkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6IGNvbG9yLWZ1bmN0aW9uKFwiZ3Jpc1wiLCBcImJhc2VcIik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShjb2xvci1mdW5jdGlvbihcIm1vcmFkby00XCIsIFwiYmFzZVwiKSwgMC4xKTtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBjb2xvcjogY29sb3ItZnVuY3Rpb24oXCJncmlzXCIsIFwiYmFzZVwiKTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3NldHMvaW1nL2NhcmQtYmFja2dyb3VuZC1saWdodC5wbmdcIikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3NldHMvaW1nL2NhcmQtYmFja2dyb3VuZC5wbmdcIikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwidGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY4MmJmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG4uY2VudHJhZG8ge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsbyB7XG4gIGNvbG9yOiAjMEIxNzNCO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZmODNiZjtcbiAgY29sb3I6ICM4ZThlOGU7XG59XG5cbi5jYXJkLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzYwYTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogcmdiYSgwLCAwLCAwLCAwLjEzKSAxcHggc29saWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgY29sb3I6ICM4ZThlOGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxODgsIDIyNiwgMC4xKTtcbn1cbi5jYXJkLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgY29sb3I6ICM4ZThlOGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3NldHMvaW1nL2NhcmQtYmFja2dyb3VuZC1saWdodC5wbmdcIikgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ltZy9jYXJkLWJhY2tncm91bmQucG5nXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/grilla-resumen/grilla-resumen.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/grilla-resumen/grilla-resumen.component.ts ***!
  \******************************************************************/
/*! exports provided: GrillaResumenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaResumenComponent", function() { return GrillaResumenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_grilla_resumen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/grilla-resumen.service */ "./src/app/services/grilla-resumen.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let GrillaResumenComponent = class GrillaResumenComponent {
    constructor(grillaResumenService) {
        this.grillaResumenService = grillaResumenService;
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.resumenCausa = [];
        this.resumenCuaderno = [];
        this.resumenEscrito = [];
        this.resumenParte = [];
        this.resumenTramite = [];
    }
    ngOnInit() {
        this.dtOptions[0] = this.constructorDtOptions();
        this.dtOptions[1] = this.constructorDtOptions();
        this.dtOptions[2] = this.constructorDtOptions();
        this.dtOptions[3] = this.constructorDtOptions();
        this.dtOptions[4] = this.constructorDtOptions();
        this.prueba();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
    }
    renderizarDatatable() {
        this.dtElements.forEach((dtElement) => {
            dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
                dtElement.dtTrigger.next();
            });
        });
    }
    prueba() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.close();
            }
        }, error => {
            console.log(error);
        });
    }
    constructorDtOptions() {
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
};
GrillaResumenComponent.ctorParameters = () => [
    { type: _services_grilla_resumen_service__WEBPACK_IMPORTED_MODULE_2__["GrillaResumenService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], GrillaResumenComponent.prototype, "dtElements", void 0);
GrillaResumenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grilla-resumen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grilla-resumen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grilla-resumen/grilla-resumen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grilla-resumen.component.scss */ "./src/app/pages/grilla-resumen/grilla-resumen.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_grilla_resumen_service__WEBPACK_IMPORTED_MODULE_2__["GrillaResumenService"]])
], GrillaResumenComponent);



/***/ }),

/***/ "./src/app/pages/grilla-resumen/grilla-resumen.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/grilla-resumen/grilla-resumen.module.ts ***!
  \***************************************************************/
/*! exports provided: GrillaResumenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaResumenModule", function() { return GrillaResumenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _grilla_resumen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grilla-resumen.component */ "./src/app/pages/grilla-resumen/grilla-resumen.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _grilla_resumen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grilla-resumen-routing.module */ "./src/app/pages/grilla-resumen/grilla-resumen-routing.module.ts");






let GrillaResumenModule = class GrillaResumenModule {
};
GrillaResumenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_grilla_resumen_component__WEBPACK_IMPORTED_MODULE_3__["GrillaResumenComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _grilla_resumen_routing_module__WEBPACK_IMPORTED_MODULE_5__["GrillaResumenRoutingModule"]
        ]
    })
], GrillaResumenModule);



/***/ }),

/***/ "./src/app/services/grilla-resumen.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/grilla-resumen.service.ts ***!
  \****************************************************/
/*! exports provided: GrillaResumenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillaResumenService", function() { return GrillaResumenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let GrillaResumenService = class GrillaResumenService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'resumen-etl';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    listarResumenEtl() {
        return this.http.get(this.url + '/listar-todo/');
    }
};
GrillaResumenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
GrillaResumenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], GrillaResumenService);



/***/ })

}]);
//# sourceMappingURL=pages-grilla-resumen-grilla-resumen-module-es2015.js.map