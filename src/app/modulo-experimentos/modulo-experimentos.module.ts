import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ag-grid
import { AgGridModule } from "ag-grid-angular/main";
import { HeaderComponent } from './../componentes/ag-grid/header/header.component';
import { HeaderGroupComponent } from './../componentes/ag-grid/header-group/header-group.component';

import { ListarExperimentosComponent } from './componentes/listar-experimentos/listar-experimentos.component';
import { CrearExperimentoComponent } from './componentes/crear-experimento/crear-experimento.component';

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
  ],
  exports: [
    ListarExperimentosComponent,
  ]
})
export class ModuloExperimentosModule { }
