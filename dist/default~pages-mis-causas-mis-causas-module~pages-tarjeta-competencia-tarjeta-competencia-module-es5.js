function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-mis-causas-mis-causas-module~pages-tarjeta-competencia-tarjeta-competencia-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaEscritoGrillaEscritoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n  <table [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered\"\n         datatable id=\"escrito\">\n    <thead class=\"fondo-grilla\">\n    <tr>\n      <th>Documento</th>\n      <th>Folio</th>\n      <th>Fecha de presentación</th>\n      <th>Tipo escrito</th>\n      <th>Referencia</th>\n    </tr>\n    </thead>\n    <tbody>\n    <ng-container>\n      <tr *ngFor=\"let item of escritos\">\n        <td class=\"centrado\"><input class=\"imagen\" type=\"image\" src=\"assets/img/gallery/pdf.png\"></td>\n        <td>{{item.numeroFolio}}</td>\n        <td>{{item.fechaPresentacion | date: 'dd/MM/yyyy'}}</td>\n        <td>{{item.tipoEscritoVO.glosa}}</td>\n        <td>{{item.referencia}}</td>\n      </tr>\n    </ng-container>\n    </tbody>\n  </table>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaTramiteGrillaTramiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n  <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered\"\n         datatable id=\"tramite\">\n    <thead class=\"fondo-grilla\">\n    <tr>\n      <th>Documento</th>\n      <th>Fecha tramite</th>\n      <th>Tipo de tramite</th>\n      <th>Etapa</th>\n      <th>Referencia</th>\n      <th>Estado firma</th>\n    </tr>\n    </thead>\n    <tbody>\n    <ng-container>\n      <tr *ngFor=\"let item of tramites\">\n        <td class=\"centrado\"><input class=\"imagen\" src=\"assets/img/gallery/pdf.png\" type=\"image\">\n        </td>\n        <td>{{item.fecha | date: 'dd/MM/yyyy'}}</td>\n        <td>{{item.tipoTramite}}</td>\n        <td>{{item.etapa}}</td>\n        <td>{{item.referencia}}</td>\n        <td>{{item.estadoFirma}}</td>\n      </tr>\n    </ng-container>\n    </tbody>\n  </table>\n<div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalResumenTramiteHistoriaCausaTramiteHistoriaCausaTramiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\" role=\"presentation\">\n    <a class=\"nav-link active\" id=\"tramite-tab\" data-toggle=\"tab\" href=\"#tramite\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Trámites</a>\n  </li>\n  <li class=\"nav-item\" role=\"presentation\">\n    <a class=\"nav-link\" id=\"escrito-tab\" data-toggle=\"tab\" href=\"#escrito\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Escritos por resolver</a>\n  </li>\n</ul>\n\n<div class=\"tab-content\" id=\"myTabContent\">\n  <div class=\"tab-pane fade show active\" id=\"tramite\" role=\"tabpanel\" aria-labelledby=\"tramite-tab\">\n    <br><br>\n    <app-grilla-tramite [tramites]=\"tramites\">\n\n    </app-grilla-tramite>\n  </div>\n  <div class=\"tab-pane fade\" id=\"escrito\" role=\"tabpanel\" aria-labelledby=\"escrito-tab\">\n    <br><br>\n    <app-grilla-escrito [escritos]=\"escritos\">\n\n    </app-grilla-escrito>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalResumenTramiteModalResumenTramiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label>Rol: {{causa.tipoCausa}}-{{causa.rolCausa}}-{{causa.eraCausa}}</label>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Parte: {{causa.glosaParte}}</label>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Fecha Ingreso: {{causa.fechaIngresoCausa | date: 'dd/MM/yyyy'}}</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label>Tribunal: {{causa.tribunalVO.glosa}}</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <h4 class=\"centrado titulo\">Historia de causa</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-historia-causa-tramite [tramites]=\"tramites\"\n                                  [escritos]=\"escritos\">\n\n      </app-historia-causa-tramite>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/models/causa.ts":
  /*!*********************************!*\
    !*** ./src/app/models/causa.ts ***!
    \*********************************/

  /*! exports provided: Causa */

  /***/
  function srcAppModelsCausaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Causa", function () {
      return Causa;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Causa = function Causa(init) {
      _classCallCheck(this, Causa);

      Object.assign(this, init);
    };
    /***/

  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaEscritoGrillaEscritoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagen {\n  width: 40px;\n}\n\n.centrado {\n  text-align: center;\n}\n\nth {\n  background-color: #6f82bf;\n  color: #fff;\n  font-weight: 500;\n  font-size: 16px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwtcmVzdW1lbi10cmFtaXRlL2hpc3RvcmlhLWNhdXNhLXRyYW1pdGUvZ3JpbGxhLWVzY3JpdG8vRDpcXERvd25sb2Fkc1xcUHJ1ZWJhIGxvZ2luXFxwb3J0YWwtdW5pZmljYWRvLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbW9kYWwtcmVzdW1lbi10cmFtaXRlXFxoaXN0b3JpYS1jYXVzYS10cmFtaXRlXFxncmlsbGEtZXNjcml0b1xcZ3JpbGxhLWVzY3JpdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZGFsLXJlc3VtZW4tdHJhbWl0ZS9oaXN0b3JpYS1jYXVzYS10cmFtaXRlL2dyaWxsYS1lc2NyaXRvL2dyaWxsYS1lc2NyaXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLXJlc3VtZW4tdHJhbWl0ZS9oaXN0b3JpYS1jYXVzYS10cmFtaXRlL2dyaWxsYS1lc2NyaXRvL2dyaWxsYS1lc2NyaXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbntcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmNlbnRyYWRve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmODJiZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn0iLCIuaW1hZ2VuIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY4MmJmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: GrillaEscritoComponent */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaEscritoGrillaEscritoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrillaEscritoComponent", function () {
      return GrillaEscritoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GrillaEscritoComponent = /*#__PURE__*/function () {
      function GrillaEscritoComponent() {
        _classCallCheck(this, GrillaEscritoComponent);

        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.escritos = [];
        this.escritosCargados = [];
      }

      _createClass(GrillaEscritoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions[0] = this.constructorDtOptions();
          this.cargarEscritos();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dtTrigger.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dtTrigger.next();
        }
      }, {
        key: "renderizarDatatable",
        value: function renderizarDatatable() {
          this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
              dtInstance.destroy();
              dtElement.dtTrigger.next();
            });
          });
        }
      }, {
        key: "cargarEscritos",
        value: function cargarEscritos() {
          this.escritosCargados = this.escritos;
        }
      }, {
        key: "constructorDtOptions",
        value: function constructorDtOptions() {
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
      }]);

      return GrillaEscritoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], GrillaEscritoComponent.prototype, "dtElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], GrillaEscritoComponent.prototype, "escritos", void 0);
    GrillaEscritoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grilla-escrito',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grilla-escrito.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grilla-escrito.component.scss */
      "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GrillaEscritoComponent);
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.module.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: GrillaEscritoModule */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaEscritoGrillaEscritoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrillaEscritoModule", function () {
      return GrillaEscritoModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _grilla_escrito_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./grilla-escrito.component */
    "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");

    var GrillaEscritoModule = function GrillaEscritoModule() {
      _classCallCheck(this, GrillaEscritoModule);
    };

    GrillaEscritoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_grilla_escrito_component__WEBPACK_IMPORTED_MODULE_3__["GrillaEscritoComponent"]],
      exports: [_grilla_escrito_component__WEBPACK_IMPORTED_MODULE_3__["GrillaEscritoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]]
    })], GrillaEscritoModule);
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaTramiteGrillaTramiteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagen {\n  width: 40px;\n}\n\n.centrado {\n  text-align: center;\n}\n\nth {\n  background-color: #6f82bf;\n  color: #fff;\n  font-weight: 500;\n  font-size: 16px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwtcmVzdW1lbi10cmFtaXRlL2hpc3RvcmlhLWNhdXNhLXRyYW1pdGUvZ3JpbGxhLXRyYW1pdGUvRDpcXERvd25sb2Fkc1xcUHJ1ZWJhIGxvZ2luXFxwb3J0YWwtdW5pZmljYWRvLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbW9kYWwtcmVzdW1lbi10cmFtaXRlXFxoaXN0b3JpYS1jYXVzYS10cmFtaXRlXFxncmlsbGEtdHJhbWl0ZVxcZ3JpbGxhLXRyYW1pdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZGFsLXJlc3VtZW4tdHJhbWl0ZS9oaXN0b3JpYS1jYXVzYS10cmFtaXRlL2dyaWxsYS10cmFtaXRlL2dyaWxsYS10cmFtaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLXJlc3VtZW4tdHJhbWl0ZS9oaXN0b3JpYS1jYXVzYS10cmFtaXRlL2dyaWxsYS10cmFtaXRlL2dyaWxsYS10cmFtaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbntcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmNlbnRyYWRve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmODJiZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn0iLCIuaW1hZ2VuIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY4MmJmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: GrillaTramiteComponent */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaTramiteGrillaTramiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrillaTramiteComponent", function () {
      return GrillaTramiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GrillaTramiteComponent = /*#__PURE__*/function () {
      function GrillaTramiteComponent() {
        _classCallCheck(this, GrillaTramiteComponent);

        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tramites = [];
        this.tramiteCargados = [];
      }

      _createClass(GrillaTramiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
          this.cargarTramites();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dtTrigger.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dtTrigger.next();
        }
      }, {
        key: "renderizarDatatable",
        value: function renderizarDatatable() {
          var _this = this;

          this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();

            _this.dtTrigger.next();
          });
        }
      }, {
        key: "cargarTramites",
        value: function cargarTramites() {
          this.tramiteCargados = this.tramites;
        }
      }]);

      return GrillaTramiteComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
      read: false,
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])], GrillaTramiteComponent.prototype, "dtElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], GrillaTramiteComponent.prototype, "tramites", void 0);
    GrillaTramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grilla-tramite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grilla-tramite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grilla-tramite.component.scss */
      "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GrillaTramiteComponent);
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.module.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: GrillaTramiteModule */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteGrillaTramiteGrillaTramiteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrillaTramiteModule", function () {
      return GrillaTramiteModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _grilla_tramite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./grilla-tramite.component */
    "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");

    var GrillaTramiteModule = function GrillaTramiteModule() {
      _classCallCheck(this, GrillaTramiteModule);
    };

    GrillaTramiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_grilla_tramite_component__WEBPACK_IMPORTED_MODULE_3__["GrillaTramiteComponent"]],
      exports: [_grilla_tramite_component__WEBPACK_IMPORTED_MODULE_3__["GrillaTramiteComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]]
    })], GrillaTramiteModule);
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteHistoriaCausaTramiteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLXJlc3VtZW4tdHJhbWl0ZS9oaXN0b3JpYS1jYXVzYS10cmFtaXRlL2hpc3RvcmlhLWNhdXNhLXRyYW1pdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: HistoriaCausaTramiteComponent */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteHistoriaCausaTramiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriaCausaTramiteComponent", function () {
      return HistoriaCausaTramiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HistoriaCausaTramiteComponent = /*#__PURE__*/function () {
      function HistoriaCausaTramiteComponent() {
        _classCallCheck(this, HistoriaCausaTramiteComponent);

        this.tramites = [];
        this.escritos = [];
      }

      _createClass(HistoriaCausaTramiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HistoriaCausaTramiteComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], HistoriaCausaTramiteComponent.prototype, "tramites", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], HistoriaCausaTramiteComponent.prototype, "escritos", void 0);
    HistoriaCausaTramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historia-causa-tramite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./historia-causa-tramite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./historia-causa-tramite.component.scss */
      "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HistoriaCausaTramiteComponent);
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: HistoriaCausaTramiteModule */

  /***/
  function srcAppPagesModalResumenTramiteHistoriaCausaTramiteHistoriaCausaTramiteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriaCausaTramiteModule", function () {
      return HistoriaCausaTramiteModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _grilla_tramite_grilla_tramite_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./grilla-tramite/grilla-tramite.module */
    "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.module.ts");
    /* harmony import */


    var _grilla_escrito_grilla_escrito_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grilla-escrito/grilla-escrito.module */
    "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.module.ts");
    /* harmony import */


    var _historia_causa_tramite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./historia-causa-tramite.component */
    "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component.ts");

    var HistoriaCausaTramiteModule = function HistoriaCausaTramiteModule() {
      _classCallCheck(this, HistoriaCausaTramiteModule);
    };

    HistoriaCausaTramiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_historia_causa_tramite_component__WEBPACK_IMPORTED_MODULE_6__["HistoriaCausaTramiteComponent"]],
      exports: [_historia_causa_tramite_component__WEBPACK_IMPORTED_MODULE_6__["HistoriaCausaTramiteComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"], _grilla_tramite_grilla_tramite_module__WEBPACK_IMPORTED_MODULE_4__["GrillaTramiteModule"], _grilla_escrito_grilla_escrito_module__WEBPACK_IMPORTED_MODULE_5__["GrillaEscritoModule"]]
    })], HistoriaCausaTramiteModule);
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalResumenTramiteModalResumenTramiteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centrado {\n  margin: auto;\n  text-align: center;\n}\n\n.titulo {\n  color: #0B173B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwtcmVzdW1lbi10cmFtaXRlL0Q6XFxEb3dubG9hZHNcXFBydWViYSBsb2dpblxccG9ydGFsLXVuaWZpY2Fkby1mcm9udC9zcmNcXGFwcFxccGFnZXNcXG1vZGFsLXJlc3VtZW4tdHJhbWl0ZVxcbW9kYWwtcmVzdW1lbi10cmFtaXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb2RhbC1yZXN1bWVuLXRyYW1pdGUvbW9kYWwtcmVzdW1lbi10cmFtaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbC1yZXN1bWVuLXRyYW1pdGUvbW9kYWwtcmVzdW1lbi10cmFtaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRve1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgY29sb3I6ICMwQjE3M0I7XHJcbn0iLCIuY2VudHJhZG8ge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsbyB7XG4gIGNvbG9yOiAjMEIxNzNCO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ModalResumenTramiteComponent */

  /***/
  function srcAppPagesModalResumenTramiteModalResumenTramiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalResumenTramiteComponent", function () {
      return ModalResumenTramiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_causa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/causa */
    "./src/app/models/causa.ts");
    /* harmony import */


    var _services_tramite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/tramite.service */
    "./src/app/services/tramite.service.ts");
    /* harmony import */


    var _services_escrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/escrito.service */
    "./src/app/services/escrito.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var ModalResumenTramiteComponent = /*#__PURE__*/function () {
      function ModalResumenTramiteComponent(tramiteService, escritoService) {
        _classCallCheck(this, ModalResumenTramiteComponent);

        this.tramiteService = tramiteService;
        this.escritoService = escritoService;
        this.causa = new _models_causa__WEBPACK_IMPORTED_MODULE_2__["Causa"]();
        this.tramites = [];
        this.escritos = [];
      }

      _createClass(ModalResumenTramiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarTramites();
        }
      }, {
        key: "listarTramites",
        value: function listarTramites() {
          var _this2 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            imageUrl: 'assets/img/gallery/loading.gif',
            showConfirmButton: false
          });
          this.tramiteService.listarTramitePorCausa(this.causa.id).subscribe(function (data) {
            if (data.length > 0) {
              _this2.tramites = data;

              _this2.listarEscritos(_this2.tramites);
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "listarEscritos",
        value: function listarEscritos(tramites) {
          var _this3 = this;

          var idCuaderno;
          tramites.forEach(function (tram) {
            idCuaderno = tram.idCuaderno;
          });
          this.escritoService.listarEscritoPorCuaderno(idCuaderno).subscribe(function (data) {
            if (data.length > 0) {
              _this3.escritos = data;
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ModalResumenTramiteComponent;
    }();

    ModalResumenTramiteComponent.ctorParameters = function () {
      return [{
        type: _services_tramite_service__WEBPACK_IMPORTED_MODULE_3__["TramiteService"]
      }, {
        type: _services_escrito_service__WEBPACK_IMPORTED_MODULE_4__["EscritoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_causa__WEBPACK_IMPORTED_MODULE_2__["Causa"])], ModalResumenTramiteComponent.prototype, "causa", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ModalResumenTramiteComponent.prototype, "tramites", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ModalResumenTramiteComponent.prototype, "escritos", void 0);
    ModalResumenTramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-resumen-tramite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-resumen-tramite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-resumen-tramite.component.scss */
      "./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tramite_service__WEBPACK_IMPORTED_MODULE_3__["TramiteService"], _services_escrito_service__WEBPACK_IMPORTED_MODULE_4__["EscritoService"]])], ModalResumenTramiteComponent);
    /***/
  },

  /***/
  "./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ModalResumenTramiteModule */

  /***/
  function srcAppPagesModalResumenTramiteModalResumenTramiteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalResumenTramiteModule", function () {
      return ModalResumenTramiteModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _historia_causa_tramite_historia_causa_tramite_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./historia-causa-tramite/historia-causa-tramite.module */
    "./src/app/pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.module.ts");
    /* harmony import */


    var _modal_resumen_tramite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-resumen-tramite.component */
    "./src/app/pages/modal-resumen-tramite/modal-resumen-tramite.component.ts");

    var ModalResumenTramiteModule = function ModalResumenTramiteModule() {
      _classCallCheck(this, ModalResumenTramiteModule);
    };

    ModalResumenTramiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_modal_resumen_tramite_component__WEBPACK_IMPORTED_MODULE_5__["ModalResumenTramiteComponent"]],
      exports: [_modal_resumen_tramite_component__WEBPACK_IMPORTED_MODULE_5__["ModalResumenTramiteComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"], _historia_causa_tramite_historia_causa_tramite_module__WEBPACK_IMPORTED_MODULE_4__["HistoriaCausaTramiteModule"]]
    })], ModalResumenTramiteModule);
    /***/
  },

  /***/
  "./src/app/services/causa.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/causa.service.ts ***!
    \*******************************************/

  /*! exports provided: CausaService */

  /***/
  function srcAppServicesCausaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CausaService", function () {
      return CausaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CausaService = /*#__PURE__*/function () {
      function CausaService(http) {
        _classCallCheck(this, CausaService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'causa';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(CausaService, [{
        key: "buscarCausa",
        value: function buscarCausa(idCompetencia, idTribunal, tipoCausa, rolCausa, anio) {
          return this.http.get(this.url + '/buscar-causa/' + rolCausa + '/' + anio + '/' + tipoCausa + '/' + idTribunal + '/' + idCompetencia);
        }
      }, {
        key: "buscarCausaParte",
        value: function buscarCausaParte(causa) {
          return this.http.post(this.url + '/buscar-causas-usuario-fecha/', causa, this.httpOptions);
        }
      }]);

      return CausaService;
    }();

    CausaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CausaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], CausaService);
    /***/
  },

  /***/
  "./src/app/services/competencia-service.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/competencia-service.service.ts ***!
    \*********************************************************/

  /*! exports provided: CompetenciaServiceService */

  /***/
  function srcAppServicesCompetenciaServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompetenciaServiceService", function () {
      return CompetenciaServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CompetenciaServiceService = /*#__PURE__*/function () {
      function CompetenciaServiceService(http) {
        _classCallCheck(this, CompetenciaServiceService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'competencia/';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(CompetenciaServiceService, [{
        key: "listarCompetencia",
        value: function listarCompetencia() {
          return this.http.get(this.url + 'listar-competencia/');
        }
      }]);

      return CompetenciaServiceService;
    }();

    CompetenciaServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CompetenciaServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], CompetenciaServiceService);
    /***/
  },

  /***/
  "./src/app/services/escrito.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/escrito.service.ts ***!
    \*********************************************/

  /*! exports provided: EscritoService */

  /***/
  function srcAppServicesEscritoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscritoService", function () {
      return EscritoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EscritoService = /*#__PURE__*/function () {
      function EscritoService(http) {
        _classCallCheck(this, EscritoService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'escrito';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(EscritoService, [{
        key: "listarEscritoPorCuaderno",
        value: function listarEscritoPorCuaderno(idCuaderno) {
          return this.http.get(this.url + '/listar-por-id-cuaderno/' + idCuaderno);
        }
      }]);

      return EscritoService;
    }();

    EscritoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    EscritoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], EscritoService);
    /***/
  },

  /***/
  "./src/app/services/tramite.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/tramite.service.ts ***!
    \*********************************************/

  /*! exports provided: TramiteService */

  /***/
  function srcAppServicesTramiteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TramiteService", function () {
      return TramiteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TramiteService = /*#__PURE__*/function () {
      function TramiteService(http) {
        _classCallCheck(this, TramiteService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'tramite';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(TramiteService, [{
        key: "listarTramitePorCausa",
        value: function listarTramitePorCausa(idCausa) {
          return this.http.get(this.url + '/listar-tramite-por-causa/' + idCausa);
        }
      }]);

      return TramiteService;
    }();

    TramiteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    TramiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TramiteService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-mis-causas-mis-causas-module~pages-tarjeta-competencia-tarjeta-competencia-module-es5.js.map