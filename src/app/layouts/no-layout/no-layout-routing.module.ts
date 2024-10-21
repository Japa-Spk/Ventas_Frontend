import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NoLayoutComponent } from "./no-layout.component";

const routes: Routes = [
  {
    path: "",
    component: NoLayoutComponent,
    children: [
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoLayoutRoutingModule {}
