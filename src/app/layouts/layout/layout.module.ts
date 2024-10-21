import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoadingSpinnerComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class LayoutModule { }

