import { NgFor } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { RouterLink } from '@angular/router';
  import {
    CarouselCaptionComponent,
    CarouselComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective
  } from '@coreui/angular';
  
  @Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    standalone: true,
    imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselCaptionComponent, CarouselControlComponent, RouterLink],
  })
  export class Carousel01Component implements OnInit {
  
    slides: any[] = new Array(2).fill({ id: -1, src: '', title: '', subtitle: '' });
  
    ngOnInit(): void {
      this.slides[0] = {
        id: 0,
        src: './assets/img/vege.gif',
        title: '',
        subtitle: '¿Vas al super y no sabes que comprar?'
      };
      this.slides[1] = {
        id: 1,
        src: './assets/img/check.jpg',
        title: '',
        subtitle: 'Organiza, planifica y ordena tus compras de tu Hogar con solo un click'
      };
    }
  }