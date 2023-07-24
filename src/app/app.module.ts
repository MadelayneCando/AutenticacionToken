import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PreciosComponent } from './component/precios/precios.component';
import { HomeComponent } from './component/home/home.component';
import { ProtegidaComponent } from './component/protegida/protegida.component';
import { IniciosesionComponent } from './component/iniciosesion/iniciosesion.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreciosComponent,
    HomeComponent,
    ProtegidaComponent,
    IniciosesionComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-vj17dw3a66etpr0k.us.auth0.com',
      clientId: 'OCWw8MWqJi2mKxsfFQ21M2d9lIoxdika',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
