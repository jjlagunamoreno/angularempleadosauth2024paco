import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados.axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrls: ['./subordinados.component.css'] // Se corrigió styleUrl -> styleUrls
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    if (this._service.token === "") {
      this._router.navigate(["/login"]);
      return;
    }

    try {
      // LLAMAMOS AL SERVICIO Y ESPERAMOS LA RESPUESTA
      const response = await this._service.getSubordinados();
      console.log("Subordinados:", response);
      this.empleados = response; // Asignamos la respuesta al array de empleados
    } catch (error) {
      console.error("Error al obtener los subordinados:", error);
      alert("No se pudo cargar la lista de subordinados.");
    }
  }
}
