import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ServiceEmpleados {
    public token: string;

    constructor(private _http: HttpClient) {
        this.token = "";
    }

    loginEmpleado(user: Login): Observable<any> {
        let json = JSON.stringify(user);
        let header = new HttpHeaders().set("Content-type", "application/json");
        let request = "auth/login";
        let url = environment.apiUrlEmpleados + request;
        return this._http.post(url, json, {headers: header});
    }

    getPerfilEmpleado(): Observable<any> {
        let request = "api/empleados/perfilempleado";
        let url = environment.apiUrlEmpleados + request;
        let header = new HttpHeaders().set("Authorization", "bearer " + this.token);
        return this._http.get(url, {headers: header});
    }

    getSubordinados(): Observable<any> {
        let request = "api/empleados/subordinados";
        let url = environment.apiUrlEmpleados + request;
        let header = new HttpHeaders().set("Authorization", "bearer " + this.token);
        return this._http.get(url, {headers: header});
    }    
}