import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';
import{AngularFireAuthModule} from "@angular/fire/compat/auth"
import { AngularFireModule } from "@angular/fire/compat";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),AppRoutingModule,AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
  AngularFireAuthModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}


