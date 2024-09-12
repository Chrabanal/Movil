import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ScannerQRCodeConfig, NgxScannerQrcodeService } from 'ngx-scanner-qrcode'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// Aqui empieza la clase HomePage
export class HomePage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  isWeb = false;

  config: ScannerQRCodeConfig = {
    isBeep: true
  }

  //Creacion de los constructores de la home page
  constructor(private alertController: AlertController,
    private platform: Platform,
    private ngxScannerService: NgxScannerQrcodeService
  ) { }

  ngOnInit() {
    //Checkear la plataforma
    this.checkPlatform();
    if (!this.isWeb) {
      BarcodeScanner.isSupported().then((result) => {
        this.isSupported = result.supported;
      });
    }
  }

  checkPlatform() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      console.log('Running on android / IOS!');
    } else if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      console.log('Running on the web!');
      this.isWeb = true;
    }
  }

  scanResult(result:any):void{
    console.log('Resultado:',result);
  }

  async scan(): Promise<void> {
    if (this.isWeb) {
      console.log('Utilizando el ngx-scanner');
    } else {
      const granted = await this.requestPermissions();
      if (!granted) {
        this.presentAlert();
        return;
      }
      const { barcodes } = await BarcodeScanner.scan();
      this.barcodes.push(...barcodes);
    }
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}

