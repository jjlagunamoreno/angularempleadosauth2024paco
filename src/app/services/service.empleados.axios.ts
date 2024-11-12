import axios from 'axios';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ServiceEmpleados {
    public token: string;

    constructor() {
        this.token = '';
    }

    // MÉTODO PARA REALIZAR EL LOGIN
    async loginEmpleado(user: Login): Promise<any> {
        const url = `${environment.apiUrlEmpleados}auth/login`;
        try {
            const response = await axios.post(url, user, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error en la petición POST (login):', error);
            throw new Error('Credenciales inválidas');
        }
    }

    // MÉTODO PARA OBTENER EL PERFIL DEL EMPLEADO
    async getPerfilEmpleado(): Promise<any> {
        const url = `${environment.apiUrlEmpleados}api/empleados/perfilempleado`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error en la petición GET (perfil):', error);
            throw new Error('No se pudo obtener el perfil del empleado');
        }
    }

    // MÉTODO PARA OBTENER LOS SUBORDINADOS
    async getSubordinados(): Promise<any> {
        const url = `${environment.apiUrlEmpleados}api/empleados/subordinados`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error en la petición GET (subordinados):', error);
            throw new Error('No se pudo obtener la lista de subordinados');
        }
    }
}
