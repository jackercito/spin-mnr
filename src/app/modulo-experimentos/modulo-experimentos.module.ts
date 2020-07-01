import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ag-grid
import { AgGridModule } from "ag-grid-angular";
import { HeaderComponent } from './../componentes/ag-grid/header/header.component';
import { HeaderGroupComponent } from './../componentes/ag-grid/header-group/header-group.component';

import { ListarExperimentosComponent } from './componentes/listar-experimentos/listar-experimentos.component';
import { CrearExperimentoComponent } from './componentes/crear-experimento/crear-experimento.component';
import { VerExperimentoComponent } from './componentes/ver-experimento/ver-experimento.component';
import { EditarExperimentoComponent } from './componentes/editar-experimento/editar-experimento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([
      HeaderComponent,
      HeaderGroupComponent,
    ])
  ],
  declarations: [
    ListarExperimentosComponent,
    CrearExperimentoComponent,
    HeaderComponent,
    HeaderGroupComponent,
    VerExperimentoComponent,
    EditarExperimentoComponent,
  ],
  exports: [
    ListarExperimentosComponent,
  ]
})
export class ModuloExperimentosModule { }
