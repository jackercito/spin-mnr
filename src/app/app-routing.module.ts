import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth0.guard';

import { CallbackComponent } from './componentes/auth0/callback/callback.component'
import { PerfilComponent } from './componentes/auth0/perfil/perfil.component'

import { ListarExperimentosComponent } from './modulo-experimentos/componentes/listar-experimentos/listar-experimentos.component';

const appRoutes: Routes = [
  {
    path: 'experimentos',
    component: ListarExperimentosComponent,
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
