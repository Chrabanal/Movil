import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {
  cards = [
    { title: 'Card 1', image: 'assets/img/inicio1.png' },
    { title: 'Card 2', image: 'assets/img/inicio2.png' },
    { title: 'Card 3', image: 'assets/img/inicio1.png' }
  ];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true
  };
}