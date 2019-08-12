import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'listEvento',
        children: [
          {
            path: '',
            loadChildren: '../pages/list-evento/list-evento.module#ListEventoPageModule'
          }
        ]
      },{
        path: 'perfilEvento/:key',
        children: [
          {
            path: '',
            loadChildren: '../pages/perfil-evento/perfil-evento.module#PerfilEventoPageModule'
          }
        ]
      },
      {
        path: 'addEvento',
        children: [
          {
            path: '',
            loadChildren: '../pages/add-evento/add-evento.module#AddEventoPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
