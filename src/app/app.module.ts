import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginUsuarioRoutingModule} from './pages/login-usuario/login-usuario-routing.module';
import { Ng2Rut } from 'ng2-rut';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { TarjetaCompetenciaComponent } from './pages/tarjeta-competencia/tarjeta-competencia.component';
import { GrillaPortalComponent } from './pages/grilla-portal/grilla-portal.component';
import { DataTablesModule } from 'angular-datatables';
import {NgSelectModule} from '@ng-select/ng-select';
import { MisCausasComponent } from './pages/mis-causas/mis-causas.component';
import { GrillaMisCausasComponent } from './pages/mis-causas/grilla-mis-causas/grilla-mis-causas.component';
import { TarjetasCausasCompetenciaComponent } from './pages/mis-causas/tarjetas-causas-competencia/tarjetas-causas-competencia.component';
import { ModificarUsuarioComponent } from './pages/menu-principal/modificar-usuario/modificar-usuario.component';
import { GrillaResumenComponent } from './pages/grilla-resumen/grilla-resumen.component';
import { ModalResumenTramiteComponent } from './pages/modal-resumen-tramite/modal-resumen-tramite.component';
import { HistoriaCausaTramiteComponent } from './pages/modal-resumen-tramite/historia-causa-tramite/historia-causa-tramite.component';
import { GrillaTramiteComponent } from './pages/modal-resumen-tramite/historia-causa-tramite/grilla-tramite/grilla-tramite.component';
import { GrillaEscritoComponent } from './pages/modal-resumen-tramite/historia-causa-tramite/grilla-escrito/grilla-escrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    CrearUsuarioComponent,
    MenuPrincipalComponent,
    TarjetaCompetenciaComponent,
    GrillaPortalComponent,
    MisCausasComponent,
    GrillaMisCausasComponent,
    TarjetasCausasCompetenciaComponent,
    ModificarUsuarioComponent,
    GrillaResumenComponent,
    ModalResumenTramiteComponent,
    HistoriaCausaTramiteComponent,
    GrillaTramiteComponent,
    GrillaEscritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginUsuarioRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2Rut,
    DataTablesModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
