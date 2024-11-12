import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css'
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  ngOnInit(): void {
    if (this._service.token == ""){
      this._router.navigate(["/login"]);
    }
    this._service.getSubordinados().subscribe(response => {
      console.log(response);
      this.empleados = response;
    })  
  }
}
