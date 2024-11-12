import { Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados.axios';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private _service: ServiceEmpleados) { }
}
