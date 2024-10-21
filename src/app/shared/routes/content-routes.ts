import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../../home/home.module').then(
        (m) => m.HomeModule
      ),
    data: {
      breadcrumb: 'Home',
    },
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('../../usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      )
  },

];
