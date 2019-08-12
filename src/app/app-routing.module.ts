import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  //{ path: 'list-evento', loadChildren: './list-evento/list-evento.module#ListEventoPageModule' },
  //{ path: 'add-evento', loadChildren: './add-evento/add-evento.module#AddEventoPageModule' },
  //{ path: 'perfil-evento', loadChildren: './perfil-evento/perfil-evento.module#PerfilEventoPageModule' },
  //{ path: 'add-evento', loadChildren: './pages/add-evento/add-evento.module#AddEventoPageModule' },
  //{ path: 'pefil-evento', loadChildren: './pages/pefil-evento/pefil-evento.module#PefilEventoPageModule' },
  //{ path: 'list-evento', loadChildren: './pages/list-evento/list-evento.module#ListEventoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
