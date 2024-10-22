import { Component } from '@angular/core';
//Data Model
import { Productos } from '../productos/modeldatosproductos';
import { Ventas, VentasCabecera, VentasDetalle } from '../ventas/modeldatosventas';
//Services
import { GlobalService } from '../shared/services/global.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../shared/services/product.service';
import { SaleService } from '../shared/services/sale.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent {
  constructor(
    private productS: ProductService,
    private globalS: GlobalService,
    public saleS: SaleService,
    public toster: ToastrService
  ) {

  }

  finalizarCompra() {
    var cabeceraventas: VentasCabecera = {
      date: new Date(),
      user_id: this.globalS.user.id,
      total_sale: this.total()
    }
    var detalleventas: VentasDetalle[] = [];
    for (let producto of this.saleS.cart) {
      var detalle: VentasDetalle = {
        product_id: parseInt(producto.id),
        sale_value: producto.sale_value,
        calculated_iva: producto.manages_iva ? producto.sale_value + (producto.sale_value * producto.iva_percentage) : producto.sale_value
      }
      detalleventas.push(detalle);
    }
    var ventas: Ventas = {
      header: cabeceraventas,
      detail: detalleventas
    }
    this.saleS.setSale(ventas).then(res => {
      this.toster.success('Se grabo correctamente', 'Grabar venta');
      this.saleS.cart = [];
    }).catch(err => {
      console.log(err);
      this.toster.error('Error al grabar registro de ventas', 'Grabar venta');
    });

  }

  total() {
    let total = 0;
    for (let producto of this.saleS.cart) {
      let totalproduct = 0;
      if (producto.manages_iva) {
        totalproduct = producto.sale_value + (producto.sale_value * producto.iva_percentage);
      } else {
        totalproduct = producto.sale_value;
      }
      total += totalproduct;
    }
    return total;
  }

}
