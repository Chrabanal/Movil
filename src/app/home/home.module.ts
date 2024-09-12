import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

LOAD_WASM().subscribe();

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxScannerQrcodeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
