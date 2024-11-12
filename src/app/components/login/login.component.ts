import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados.axios';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('cajausuario') cajaUsuario!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;

  public respuesta!: string;

  constructor(private _service: ServiceEmpleados, private _router: Router) { }

  async loginUsuario(): Promise<void> {
    const userName = this.cajaUsuario.nativeElement.value;
    const password = this.cajaPassword.nativeElement.value;

    const user = new Login(userName, password);

    try {
      const response = await this._service.loginEmpleado(user);
      console.log('Respuesta del servidor:', response);

      // GUARDAR TOKEN
      this._service.token = response.response;
      localStorage.setItem('authToken', response.response);

      this.respuesta = 'Inicio de sesión exitoso';
      this._router.navigate(['/perfil']);
    } catch (error) {
      console.error(error);
      this.respuesta = 'Usuario o contraseña incorrectos';
    }
  }
}
