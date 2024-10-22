import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//Modelos
import { Ventas } from '../../ventas/modeldatosventas';
import { Productos } from '../../productos/modeldatosproductos';
//env
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SaleService {
  url_api = environment.url_api;
  cart: Productos[] = [];
  my_sales = []
  constructor(
    public router: Router,
    private http: HttpClient
  ) {

  }

  //Traer todos los registros de ventas
  async getSales(): Promise<any> {
    var url_point = 'sales/';
    try {
      const consulta$ = this.http.get(this.url_api + url_point);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }

  //Traer todos los registros de ventas del usuario
  async getSalesMe(userId: String): Promise<any> {
    var url_point = 'sales/' + userId;
    try {
      const consulta$ = this.http.get(this.url_api + url_point);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }

  //Crear registro de venta
  async setSale(sale: Ventas): Promise<any> {
    var url_point = 'sales/';
    try {
      const consulta$ = this.http.post(this.url_api + url_point, sale);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }



}
