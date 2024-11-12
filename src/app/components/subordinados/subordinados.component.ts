import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados.axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrls: ['./subordinados.component.css']
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

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
      const response = await this._service.getSubordinados();
      console.log('Lista de subordinados:', response);
      this.empleados = response;
    } catch (error) {
      console.error('Error obteniendo subordinados:', error);
      alert('No se pudo obtener la lista de subordinados.');
    }
  }
}
