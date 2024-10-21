import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//Modelos
import { Usuarios } from '../../usuarios/modeldatosusuarios';
//env
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url_api = environment.url_api;

  constructor(
    public router: Router,
    private http: HttpClient
  ) {

  }

  //Traer todos los usuarios
  async getUsers(): Promise<any> {
    var url_point = 'users/';
    try {
      const consulta$ = this.http.get(this.url_api + url_point);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }
  //Crear Usuario
  async setUsers(user: Usuarios): Promise<any> {
    var url_point = 'users/';
    try {
      const consulta$ = this.http.post(this.url_api + url_point, user);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }

  //Crear Usuario
  async putUsers(user: Usuarios): Promise<any> {
    var url_point = 'users/';
    try {
      const consulta$ = this.http.put(this.url_api + url_point + user.id, user);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }

  //Eliminar Usuario
  async deleteUsers(user: Usuarios): Promise<any> {
    var url_point = 'users/';
    try {
      const consulta$ = this.http.delete(this.url_api + url_point + user.id);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }
}
