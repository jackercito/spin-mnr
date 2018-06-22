import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuModule } from './menu/menu.module';
import { CallbackComponent } from './componentes/auth0/callback/callback.component';

//Services
import { ApiService } from './services/api.service'
import { Auth0Service } from './services/auth0.service';
import { PerfilComponent } from './componentes/auth0/perfil/perfil.component'

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    Auth0Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
