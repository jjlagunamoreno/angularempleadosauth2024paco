import { Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(
    private _service: ServiceEmpleados){
    }
}
