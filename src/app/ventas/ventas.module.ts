import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VentasComponent } from './ventas.component';

const routes = [
  {
    path: '',
    component: VentasComponent,
    data: {
      title: ""
    }
  },
];
@NgModule({
  declarations: [
    VentasComponent
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
