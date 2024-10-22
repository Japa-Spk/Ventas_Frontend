import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  url_api = environment.url_api;
  /** Guarda la informacion del usuario. */
  public user: any;

  public initData: boolean = false;

  constructor(
    public router: Router,
    private http: HttpClient,
    public toster: ToastrService
  ) {
    this.inicializarDatos();
  }

  inicializarDatos() {
    //consulta usuario inicializarlo en aplicacion
    let user: any = JSON.parse(localStorage.getItem('user') || 'null');
    console.log('Valor user en global', user);
    if (!user) {
      //Si no esta usuario en localStorage lo inicializa
      this.router.navigate(['/login']);
    } else {
      //Validar token expiration
      this.getUser().then(res=>{
        this.user = res;
        this.initData = true;
      }).catch(error=>{
        this.toster.error(error.error.detail);
        this.router.navigate(['/login']);
      });
        
    }
    console.log('Global Service Data', this);
  }
  //Valida si el usuario en Administrador 
  esAdministrador() {
    this.user.is_admin;
  }
  //Consultar sesion si no ha expirado
  async getUser(): Promise<any> {
    var url_point = 'users/me';
    try {
      const consulta$ = this.http.get(this.url_api + url_point);
      const resultado = await firstValueFrom(consulta$);
      return resultado;
    } catch (error: any) {
      throw error;
    }
  }
}
