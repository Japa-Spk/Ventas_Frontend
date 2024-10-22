import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
//env
import { environment } from '../../environments/environment';
//Services
import { GlobalService } from './global.service'
import { ToastrService } from 'ngx-toastr';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  //environment
  url_api = environment.url_api;
  private userData: any;
  public showLoader: boolean = false;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    private globalS: GlobalService,
    public toster: ToastrService,
    private http: HttpClient
  ) {


  }

  ngOnInit(): void { }


  //login function
  async getLogin(user: any): Promise<any> {
    var url_point = 'login';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    const body = new HttpParams()
      .set('username', user.username)
      .set('password', user.password)
    try {
      const consulta$ = this.http.post(this.url_api + url_point, body.toString(), { 'headers': headers });
      const userresultado = await firstValueFrom(consulta$);
      if (userresultado) {
        this.userData = userresultado;
        //guarda usuario en localstorage para que guard lo valide
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.globalS.inicializarDatos();
        this.router.navigateByUrl('/home');
      } else {
        localStorage.removeItem('user');
      }
    } catch (error: any) {
      console.log(error);
      this.toster.error(error.error.detail);
      throw error;
    }
  }


  // Sign out
  SignOut() {
    this.showLoader = false;
    localStorage.clear();
    sessionStorage.clear();
  }

  // Registro de usuario
  registerUser(email: string, password: string) {
    // return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

}
