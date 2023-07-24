import { Component } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  user :string='';
  pass :string='';
  tok :string='';  

  constructor(private router:Router, private authService:AuthService, private tokService:TokenService, 
    private http:HttpClient, private cookieService:CookieService){}

    iniciar(): void {
      let ent: boolean;
      ent = this.authService.iniciar(this.user, this.pass);
      console.log(ent);
      console.log(this.user);
      this.tok =  this.authService.tok;
      if(ent==true){
        this.router.navigate(['/usuario']);
        console.log(this.tok);
      }
      else{
        mostrarMensajeEmergente();
      }  
    }

    loggeado(): boolean{
      return this.authService.loggeado();
    }

    salir():void {
      this.authService.salir();
      this.tok='';
    }    
}

function mostrarMensajeEmergente() {
  const mensaje = 'El usuario o contraseña están incorrectos.';
  window.alert(mensaje);
}
