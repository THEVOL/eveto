import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PefilEventoPage } from './pefil-evento.page';

const routes: Routes = [
  {
    path: '',
    component: PefilEventoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PefilEventoPage]
})
export class PefilEventoPageModule {}
