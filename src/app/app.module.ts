import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { CallbackComponent } from './componentes/auth0/callback/callback.component';

//Modulos
import { MenuModule } from './menu/menu.module';
import { ModuloExperimentosModule } from './modulo-experimentos/modulo-experimentos.module'

//Services
import { Auth0Service } from './services/auth0.service';
import { PerfilComponent } from './componentes/auth0/perfil/perfil.component';

//ag-grid
import { AgGridModule } from 'ag-grid-angular/main';
import { HeaderGroupComponent } from './componentes/ag-grid/header-group/header-group.component';
import { HeaderComponent } from './componentes/ag-grid/header/header.component';
import { BotonVerExperimentoComponent } from './componentes/ag-grid/boton-ver-experimento/boton-ver-experimento.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    PerfilComponent,
    BotonVerExperimentoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MenuModule,
    ModuloExperimentosModule,
    HttpClientModule,
    RouterModule,
    AgGridModule.withComponents([
      HeaderComponent,
      HeaderGroupComponent,
      BotonVerExperimentoComponent
    ])
  ],
  providers: [
    Auth0Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
