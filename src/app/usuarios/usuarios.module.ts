import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
const routes = [
  {
    path: '',
    component: UsuariosComponent,
    data: {
      title: ""
    }
  },
];
@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosCrudComponent
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
export class UsuariosModule { }
