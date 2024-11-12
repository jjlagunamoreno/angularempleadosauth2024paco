import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  ngOnInit(): void {
    if (this._service.token == ""){
      this._router.navigate(["/login"]);
    }
    this._service.getPerfilEmpleado().subscribe(response => {
      console.log(response);
      this.empleado = response;
    })  
  }
}
