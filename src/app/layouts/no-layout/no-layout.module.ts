import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoLayoutComponent } from './no-layout.component';
import { NoLayoutRoutingModule } from './no-layout-routing.module';


@NgModule({
  declarations: [
    NoLayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NoLayoutRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class NoLayoutModule { }

