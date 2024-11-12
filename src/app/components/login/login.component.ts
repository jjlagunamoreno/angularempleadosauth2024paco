import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  public respuesta!: string;
  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  loginUsuario(): void {
    let userName = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let user = new Login(userName, password);
    this._service.loginEmpleado(user).subscribe(response => {
      console.log("listo");
      this._service.token = response.response;
      this.respuesta = response.response;
    })
  }

  ngOnInit(): void {
    
  }
}
