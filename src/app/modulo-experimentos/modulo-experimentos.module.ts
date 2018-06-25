import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarExperimentosComponent } from './componentes/listar-experimentos/listar-experimentos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarExperimentosComponent],
  exports: [
    ListarExperimentosComponent
  ]
})
export class ModuloExperimentosModule { }
