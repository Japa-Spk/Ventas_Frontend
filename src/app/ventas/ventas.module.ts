import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { VentasComponent } from './ventas.component';

const routes = [
  {
    path: '',
    component: VentasComponent,
    data: {
      title: ""
    }
  },
  {
    path: 'mis-compras',
    component: MisComprasComponent,
    data: {
      title: "Mis Compras",
      type:1
    }
  },
  {
    path: 'ventasgen',
    component: MisComprasComponent,
    data: {
      title: "Ventas generales",
      type:2
    }
  },
];
@NgModule({
  declarations: [
    VentasComponent,
    MisComprasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})
export class VentasModule { }
