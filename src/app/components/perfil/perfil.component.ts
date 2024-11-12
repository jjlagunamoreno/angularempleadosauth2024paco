import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados.axios';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    if (this._service.token === "") {
      this._router.navigate(['/login']);
      return;
    }

    try {
      const response = await this._service.getPerfilEmpleado();
      console.log('Perfil del empleado:', response);
      this.empleado = response;
    } catch (error) {
      console.error('Error obteniendo el perfil:', error);
      alert('No se pudo obtener el perfil del empleado.');
    }
  }
}
