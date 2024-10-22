import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//Modelos
import { Productos } from '../../productos/modeldatosproductos';
//env
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url_api = environment.url_api;

  constructor(
    public router: Router,
    private http: HttpClient
  ) {

  }

  //Traer todos los productos
  async getProducts(): Promise<any> {
    var url_point = 'products/';
    try {
      const consulta$ = this.http.get(this.url_api + url_point);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }
  //Crear Producto
  async setProduct(product: Productos): Promise<any> {
    var url_point = 'products/';
    try {
      const consulta$ = this.http.post(this.url_api + url_point, product);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }

  //Actualizar Producto
  async putProduct(product: Productos): Promise<any> {
    var url_point = 'products/';
    try {
      const consulta$ = this.http.put(this.url_api + url_point + product.id, product);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }

  //Eliminar Productp
  async deleteProduct(product: Productos): Promise<any> {
    var url_point = 'products/';
    try {
      const consulta$ = this.http.delete(this.url_api + url_point + product.id);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }
}
