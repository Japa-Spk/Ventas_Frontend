import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { content } from 'src/app/shared/routes/content-routes';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...content,
      {
        path: "",
        data: {
          sidebar: false,
        },
        children: [
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
