import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CrearUsuarioComponent} from './pages/crear-usuario/crear-usuario.component';
import {LoginUsuarioComponent} from './pages/login-usuario/login-usuario.component';
import {MenuPrincipalComponent} from './pages/menu-principal/menu-principal.component';
import {ModificarUsuarioComponent} from './pages/menu-principal/modificar-usuario/modificar-usuario.component';
import {LoginUsuarioRoutingModule} from './pages/login-usuario/login-usuario-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2Rut} from 'ng2-rut';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    CrearUsuarioComponent,
    LoginUsuarioComponent,
    MenuPrincipalComponent,
    ModificarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LoginUsuarioRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2Rut,
    FormsModule,
    NgSelectModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  exports: [
    TitleComponent,
    BreadcrumbsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
