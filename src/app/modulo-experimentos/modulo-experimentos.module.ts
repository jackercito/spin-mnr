import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarExperimentosComponent } from './componentes/listar-experimentos/listar-experimentos.component';
import { CrearExperimentoComponent } from './componentes/crear-experimento/crear-experimento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListarExperimentosComponent, CrearExperimentoComponent],
  exports: [
    ListarExperimentosComponent
  ]
})
export class ModuloExperimentosModule { }
