import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosCrudComponent } from './productos-crud/productos-crud.component'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
const routes = [
  {
    path: '',
    component: ProductosComponent,
    data: {
      title: ""
    }
  },
];
@NgModule({
  declarations: [
    ProductosComponent,
    ProductosCrudComponent
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
export class ProductosModule { }
