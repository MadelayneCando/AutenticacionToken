import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { PreciosComponent } from './component/precios/precios.component';
import { ProtegidaComponent } from './component/protegida/protegida.component';
import { IniciosesionComponent } from './component/iniciosesion/iniciosesion.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'precios', component:PreciosComponent},
  {path:'protegida', component:ProtegidaComponent, canActivate: [AuthGuard]},
  {path:'iniciar', component:IniciosesionComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
