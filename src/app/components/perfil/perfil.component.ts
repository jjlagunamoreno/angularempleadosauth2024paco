import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados.axios';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'] // Se corrigió styleUrl -> styleUrls
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    if (this._service.token === "") {
      this._router.navigate(["/login"]);
      return;
    }

    try {
      // LLAMAMOS AL SERVICIO Y ESPERAMOS LA RESPUESTA
      const response = await this._service.getPerfilEmpleado();
      console.log("Empleado:", response);
      this.empleado = response; // Asignamos la respuesta al modelo empleado
    } catch (error) {
      console.error("Error al obtener el perfil del empleado:", error);
      alert("No se pudo cargar el perfil del empleado.");
    }
  }
}
