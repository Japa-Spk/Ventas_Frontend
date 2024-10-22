import { Component } from '@angular/core';
//Data Model
import { Productos } from '../productos/modeldatosproductos';
//Services
import { ToastrService } from 'ngx-toastr';
import { BusquedaService } from '../shared/services/busqueda.service';
import { ProductService } from '../shared/services/product.service';
import { SaleService } from '../shared/services/sale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //Manejo Data
  public data: any = [];
  public vista: any = [];
  //Estado de carga
  showLoading = true;
  constructor(
    private busquedaS: BusquedaService,
    private productS: ProductService,
    private saleS: SaleService,
    public toster: ToastrService
  ) {
    this.initData();
    //Habilita Busqueda Global
    this.busquedaS.busqueda$.subscribe(busqueda => {
      console.log('Buscando ->', busqueda);
      this.buscar(busqueda).then(resbus => {
        console.log(resbus);
        //Asigna data search a vista
        this.vista = resbus;
      });
    });

  }
  initData() {
    this.productS.getProducts().then(res => {
      var datos = res;
      if (datos) {
        this.data = datos;
        this.vista = datos;
        this.showLoading = false;
      }
    });
  }

  buscar(searchKey: string) {
    return Promise.resolve(
      this.data.filter(
        (item: any) =>
          item.code.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 ||
          item.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
      )
    );
  }

  addCart(producto: Productos) {
    this.saleS.cart.push(producto);
  }

}
