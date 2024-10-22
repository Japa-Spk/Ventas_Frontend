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
export class SaleService {
  url_api = environment.url_api;
  cart: Productos[] = [];
  my_sales = []
  constructor(
    public router: Router,
    private http: HttpClient
  ) {

  }



}
