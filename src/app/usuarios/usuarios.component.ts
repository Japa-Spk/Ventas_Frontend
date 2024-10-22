import { Component } from '@angular/core';
//Data Model
import { Usuarios } from './modeldatosusuarios';
//services
import { ToastrService } from 'ngx-toastr';
import { BusquedaService } from '../shared/services/busqueda.service';
import { UserService } from '../shared/services/user.service';
import { AlertService } from '../shared/services/alerts.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  //Manejo Data
  public data: any = [];
  public vista: any = [];
  //Manejo Crud
  public openModal: boolean = false;
  public editDataItem: Usuarios | undefined = undefined;
  public isNew: boolean | undefined = undefined;
  //Estado de carga
  showLoading = true;
  //Ordenamiento
  columnaOrdenada: string = "";
  ordenAscendente: boolean = false;
  //Paginacion Data
  currentPage = 1;
  itemsPerPage = 6;
  totalItems = 0;
  constructor(
    private busquedaS: BusquedaService,
    private userS: UserService,
    private alertS: AlertService,
    public toster: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.initData();
    //Habilita Busqueda Global
    this.busquedaS.busqueda$.subscribe(busqueda => {
      console.log('Buscando ->', busqueda);
      this.buscar(busqueda).then(resbus => {
        console.log(resbus);
        //Asigna data search a vista
        this.vista = resbus;
        this.columnaOrdenada = "";
      });
    });
  }


  closeModalAction(): void {
    this.openModal = false;
  }

  initData() {
    this.userS.getUsers().then(res => {
      var datos = res;
      if (datos) {
        this.data = datos;
        this.vista = datos;
        this.totalItems = datos.length
        this.showLoading = false;
      }
    });
  }

  public async addHandler() {
    this.isNew = true;
    await new Promise(f => setTimeout(f, 1));
    this.editDataItem = new Usuarios();
    this.openModal = true;
  }

  public async editHandler(dataItem: Usuarios) {
    console.log('editHandler dataItem:', dataItem);
    this.isNew = false;
    await new Promise(f => setTimeout(f, 1));
    this.editDataItem = dataItem;
    this.openModal = true;
  }


  public cancelHandler() {
    this.editDataItem = undefined;
    this.openModal = false;
  }

  async saveHandler(usuario: Usuarios) {
    console.log('a grabar ', usuario, this.isNew, this.editDataItem);
    if (this.isNew) {
      this.showLoading = true
      //Guardar
      this.userS.setUsers(usuario).then(res => {
        this.alertS.alertaOk('Adicion', 'Se adiciono usuario')
        this.showLoading = false;
        this.initData();
        this.openModal = false;
      }).catch((err: any) => {
        this.alertS.alertaError('Adicion', 'Error al adicionar ->' + JSON.stringify(err.error.detail))
        this.showLoading = false;
      });
    } else {
      if (this.editDataItem !== undefined) {
        this.showLoading = true
        console.log('edit data', this.editDataItem)
        console.log('datos usuario', usuario)
        //Actualizar
        this.userS.putUsers(usuario).then(res => {
          this.alertS.alertaOk('Actualizar', 'Se actualizo usuario')
          this.showLoading = false;
          this.initData();
          this.openModal = false;
        }).catch((err: any) => {
          this.alertS.alertaError('Actualizar', 'Error al actualizar ->' + JSON.stringify(err.error.detail))
          this.showLoading = false;
        });
        console.log('editado', usuario);
      }
    }
    this.editDataItem = undefined;
  }

  public async removeHandler(dataItem: any) {
    console.log(dataItem);
    //Eliminar
    this.showLoading = true;
    this.alertS.alertaOk('Eliminar', 'Desea eliminar usuario').then(async (x) => {
      if (x.isConfirmed) {
        var eliminar_usuario = await this.userS.deleteUsers(dataItem);
        console.log('eliminar usuario -> ', eliminar_usuario);
        this.initData();
      }
    });
  }



  //Ordenar y Buscar
  ordenar(campo: string) {
    this.columnaOrdenada = campo;
    this.ordenAscendente = !this.ordenAscendente;
    this.vista.sort((a: any, b: any) => {
      const valorA = this.obtenerValor(a, campo);
      const valorB = this.obtenerValor(b, campo);
      if (typeof valorA === 'number' && typeof valorB === 'number') {
        return this.ordenAscendente ? valorA - valorB : valorB - valorA;
      } else {
        const stringA = valorA.toString().toLowerCase();
        const stringB = valorB.toString().toLowerCase();
        return this.ordenAscendente ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA);
      }
    });
    console.log("ordenado por campo ", campo, this.vista, ' En orden ASC', this.ordenAscendente);

  }
  obtenerValor(objeto: any, campo: string): any { //Funcion para identificar si el campo es numerico o string para hacer las comparaciones
    // Maneja el acceso a propiedades anidadas en el objeto
    const propiedades = campo.split('.');
    let valor = objeto;
    for (const propiedad of propiedades) {
      valor = valor[propiedad];
      if (valor === undefined) {
        break;
      }
    }
    return valor;
  }
  //Buscar en tabla
  buscar(searchKey: string) {
    return Promise.resolve(
      this.data.filter(
        (item: any) =>
          item.cod_vended.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 ||
          item.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 ||
          item.num_phone.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
      )
    );
  }

  //Paginacion
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  getPagesArray(): number[] {
    return Array(Math.ceil(this.totalItems / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }


}
