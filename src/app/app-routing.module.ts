import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth0.guard';
import { GuardScopesService } from './services/auth0.guards-scopes';

import { CallbackComponent } from './componentes/auth0/callback/callback.component'
import { PerfilComponent } from './componentes/auth0/perfil/perfil.component'

import { ListarExperimentosComponent } from './modulo-experimentos/componentes/listar-experimentos/listar-experimentos.component';
import { CrearExperimentoComponent } from './modulo-experimentos/componentes/crear-experimento/crear-experimento.component';
import { VerExperimentoComponent } from './modulo-experimentos/componentes/ver-experimento/ver-experimento.component';
import { EditarExperimentoComponent } from './modulo-experimentos/componentes/editar-experimento/editar-experimento.component';

const appRoutes: Routes = [
  {
    path: 'experimentos/listar',
    component: ListarExperimentosComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'experimentos/nuevo',
    component: CrearExperimentoComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'experimentos/mostrar/:id',
    component: VerExperimentoComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'experimentos/editar/:id',
    component: EditarExperimentoComponent,
    canActivate: [
      AuthGuard
    ]
  },
  { path: 'callback', component: CallbackComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
