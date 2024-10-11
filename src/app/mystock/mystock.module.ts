import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MystockPageRoutingModule } from './mystock-routing.module';

import { MystockPage } from './mystock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MystockPageRoutingModule
  ],
  declarations: [MystockPage]
})
export class MystockPageModule {}
