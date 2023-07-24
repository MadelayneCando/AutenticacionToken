import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tok: string = '';
 
  constructor(private cookieService: CookieService) { }

  iniciar(user: string, pass: string): boolean {
    let entrar: boolean;
    entrar = false;
    this.tok = uuidv4(); 
    if (user === 'MadeCM' && pass === '1234') {
      const token = uuidv4(); 
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 3);
      this.cookieService.set('token', token, expirationDate);
      console.log('El token se encuentra almacenado en la cookie.');      
      entrar=true; 
    } else {
      console.error('Usuario o contraseña incorrecto.');
      entrar = false;
    }
    console.log(entrar);
    return entrar;
  }

  loggeado(): boolean {
    return this.cookieService.check('token');
  }

  salir(): void {
    this.cookieService.delete('token');
    this.tok = ''; 
    console.log('Ha salido con éxito.');
  }  
}
