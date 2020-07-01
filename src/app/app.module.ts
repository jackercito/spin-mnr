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
import { GuardScopesService } from './services/auth0.guards-scopes';

//Services
import { Auth0Service } from './services/auth0.service';
import { PerfilComponent } from './componentes/auth0/perfil/perfil.component';

//ag-grid
import { AgGridModule } from 'ag-grid-angular';
import { HeaderGroupComponent } from './componentes/ag-grid/header-group/header-group.component';
import { HeaderComponent } from './componentes/ag-grid/header/header.component';
import { BotonVerExperimentoComponent } from './componentes/ag-grid/boton-ver-experimento/boton-ver-experimento.component';

//Tostadas
//import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    PerfilComponent,
    BotonVerExperimentoComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MenuModule,
    ModuloExperimentosModule,
    HttpClientModule,
    AgGridModule.withComponents([
      HeaderComponent,
      HeaderGroupComponent,
      BotonVerExperimentoComponent
    ]),
    //SnotifyModule,
  ],
  providers: [
    GuardScopesService,
    Auth0Service,
    //{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    //SnotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
