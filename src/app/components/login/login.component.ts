import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados.axios';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Se corrigió styleUrl -> styleUrls
})
export class LoginComponent implements OnInit {
  @ViewChild("cajaUsuario") cajaUsuario!: ElementRef;
  @ViewChild("cajaPassword") cajaPassword!: ElementRef;

  public respuesta!: string;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) { }

  async loginUsuario(): Promise<void> {
    const userName = this.cajaUsuario.nativeElement.value.trim();
    const password = this.cajaPassword.nativeElement.value.trim();

    if (!userName || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const user = new Login(userName, password);

    try {
      // LLAMAMOS AL SERVICIO Y ESPERAMOS LA RESPUESTA
      const response = await this._service.loginEmpleado(user);

      console.log("Respuesta del servidor:", response);

      // GUARDAMOS EL TOKEN EN EL SERVICIO Y LOCALSTORAGE
      this._service.token = response.response; // Asignamos el token al servicio
      localStorage.setItem('authToken', response.response); // Guardamos el token en localStorage
      this.respuesta = response.response;

      alert("Inicio de sesión exitoso");

      // REDIRIGIMOS AL COMPONENTE PERFIL
      this._router.navigate(['/perfil']);
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert("Usuario o contraseña incorrectos");
    }
  }

  ngOnInit(): void { }
}
