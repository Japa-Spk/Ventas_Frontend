import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Modelo de datos
//Servicios
import { ToastrService } from 'ngx-toastr';
import { SaleService } from '../../shared/services/sale.service';
import { GlobalService } from '../../shared/services/global.service';
import { BusquedaService } from '../../shared/services/busqueda.service';


@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.scss']
})
export class MisComprasComponent implements OnInit {
  //Data Component
  public titulo: string = '';
  public type: number = 0;
  //Manejo Data
  public data: any = [];
  public vista: any = [];
  //Estado de carga
  showLoading = true;
  //detalle
  // Estado de expansión
  expandedRows: Set<number> = new Set();
  //Filtros
  public dateFilter: Date = new Date();


  constructor(
    private saleS: SaleService,
    private busquedaS: BusquedaService,
    private globalS: GlobalService,
    public toster: ToastrService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.titulo = data['title'];
      this.type = data['type'];
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
    });
  }


  initData() {
    if (this.type == 1) {
      this.saleS.getSalesMe().then(res => {
        console.log("registro de ventas -> ", res);
        var datos = res;
        if (datos) {
          this.data = datos;
          this.vista = datos;
          this.showLoading = false;
        }
      }).catch(err => {
        console.log("error cargar registros de ventas", err);
      });
    } else if (this.type == 2) {
      this.saleS.getSales().then(res => {
        console.log("registro de ventas -> ", res);
        var datos = res;
        if (datos) {
          this.data = datos;
          this.vista = datos;
          this.showLoading = false;
        }
      }).catch(err => {
        console.log("error cargar registros de ventas", err);
      });
    }
  }



  buscar(searchKey: string) {
    return Promise.resolve(
      this.data.filter(
        (item: any) =>
          item.consecutive.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
      )
    );
  }

  buscarDate(date: Date) {
    return Promise.resolve(
      this.data.filter(
        (item: any) =>
          item.date.indexOf(date) > -1
      )
    );
  }

  filterDate() {
    console.log('Buscando ->', this.dateFilter);
    this.buscarDate(this.dateFilter).then(resbus => {
      console.log(resbus);
      //Asigna data search a vista
      this.vista = resbus;
    });
  }

  // Función para alternar el detalle
  toggleDetail(index: number) {
    if (this.expandedRows.has(index)) {
      this.expandedRows.delete(index);
    } else {
      this.expandedRows.add(index);
    }
  }

  // Verificar si el índice está expandido
  isExpanded(index: number): boolean {
    return this.expandedRows.has(index);
  }

}
