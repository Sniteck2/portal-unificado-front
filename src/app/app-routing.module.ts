import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginUsuarioComponent} from './pages/login-usuario/login-usuario.component';
import {CrearUsuarioComponent} from './pages/crear-usuario/crear-usuario.component';
import {AdminComponent} from './layout/admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: '/login-usuario', pathMatch: 'full'},
  {path: 'login-usuario', component: LoginUsuarioComponent},
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'menu-principal', component: AdminComponent},
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: ' ',
        redirectTo: 'menu-principal',
        pathMatch: 'full'
      },
      {
        path: 'mis-causas',
        loadChildren: () => import('./pages/mis-causas/mis-causas.module').then(m => m.MisCausasModule)
      },
      {
        path: 'consulta-causas',
        loadChildren: () => import('./pages/tarjeta-competencia/tarjeta-competencia.module').then(m => m.TarjetaCompetenciaModule)
      },
      {
        path: 'resumen-migracion',
        loadChildren: () => import('./pages/grilla-resumen/grilla-resumen.module').then(m => m.GrillaResumenModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
