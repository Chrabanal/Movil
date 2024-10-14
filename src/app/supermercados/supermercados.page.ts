import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-supermercados',
  templateUrl: './supermercados.page.html',
  styleUrls: ['./supermercados.page.scss'],
})
export class SupermercadosPage implements OnInit {

  currentLocation: { lat: number, lng: number } | null = null;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  // Método para obtener la ubicación actual del usuario
  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
    }).catch((error) => {
      console.log('Error al obtener la ubicación', error);
    });
  }
  
  // Método para abrir Google Maps con la búsqueda de supermercados cercanos
  
  openGoogleMapSupermercados() {
    if (this.currentLocation) {
      const url = `https://www.google.com/maps/search/supermercados/@${this.currentLocation.lat},${this.currentLocation.lng},15z`;
      window.open(url, '_blank');
    } else {
      console.log('Ubicación no disponible');
    }
  }
  
  openGoogleMapsSantaIsabel() {
    if (this.currentLocation) {
      const url = `https://www.google.com/maps/search/santa+isabel/@${this.currentLocation.lat},${this.currentLocation.lng},15z`;
      window.open(url, '_blank');
    } else {
      console.log('Ubicación no disponible');
    }
  }
  openGoogleMapsLider() {
    if (this.currentLocation) {
      const url = `https://www.google.com/maps/search/lider/@${this.currentLocation.lat},${this.currentLocation.lng},15z`;
      window.open(url, '_blank');
    } else {
      console.log('Ubicación no disponible');
    }
  }
  openGoogleMapsJumbo() {
    if (this.currentLocation) {
      const url = `https://www.google.com/maps/search/jumbo/@${this.currentLocation.lat},${this.currentLocation.lng},15z`;
      window.open(url, '_blank');
    } else {
      console.log('Ubicación no disponible');
    }
  }
  
  openGoogleMapsUnimarc() {
    if (this.currentLocation) {
      const url = `https://www.google.com/maps/search/unimarc/@${this.currentLocation.lat},${this.currentLocation.lng},15z`;
      window.open(url, '_blank');
    } else {
      console.log('Ubicación no disponible');
    }
  }

  





}

