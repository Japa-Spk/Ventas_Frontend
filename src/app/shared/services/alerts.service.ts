import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

// declare var require;
// const Swal = require('sweetalert2');

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor() {

    }

    
    public alertaOk(title:string, message:string){
        return Swal.fire({
          title: title,
          text: message,
          icon: 'success',
          showCancelButton: true
        })
    }

    public alertaError(title:string, message:string){
        return Swal.fire({
          title: title,
          text: message,
          icon: 'error',
          showCancelButton: false
        })
    }
    public alertaWarning(title:string, message:string){
        return Swal.fire({
          title: title,
          text: message,
          icon: 'warning',
          showCancelButton: true
        })
    }

    public alertaAvanzada(titulo: string, texto: string, btnconf: string, btncanc: string, tituloconfirm: string, msjconfirm: string) {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: titulo,
                text: texto,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: btnconf,
                cancelButtonText: btncanc
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        tituloconfirm,
                        msjconfirm,
                        'success'
                    );
                    resolve(true);
                } else {
                    resolve(false);
                }

            })
        });
    };

    

    public alertaSoloConfirm(titulo: string, texto: string, btnconf: string, tituloconfirm: string, msjconfirm: string) {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: titulo,
                text: texto,
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: btnconf,
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        tituloconfirm,
                        msjconfirm,
                        'success'
                    );
                    resolve(true);
                } else {
                    resolve(false);
                }

            })
        });
    };

    public alertaSoloConfirmerror(titulo: string, texto: string, btnconf: string, tituloconfirm: string, msjconfirm: string) {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: titulo,
                text: texto,
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: btnconf,
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        tituloconfirm,
                        msjconfirm,
                        'error'
                    );
                    resolve(true);
                } else {
                    resolve(false);
                }

            })
        });
    };





}
