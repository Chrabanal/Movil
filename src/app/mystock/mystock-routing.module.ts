import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MystockPage } from './mystock.page';

const routes: Routes = [
  {
    path: '',
    component: MystockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MystockPageRoutingModule {}
