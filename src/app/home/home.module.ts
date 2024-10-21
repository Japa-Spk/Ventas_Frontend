import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: ""
    }
  },
];
@NgModule({
  declarations: [
    HomeComponent
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
export class HomeModule { }
