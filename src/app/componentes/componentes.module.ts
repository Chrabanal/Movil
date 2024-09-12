import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel01Component } from './carousel/carousel.component'; 



@NgModule({
  imports: [
    CommonModule,
    Carousel01Component
  ],
  exports: [Carousel01Component]
})
export class CompomentsModule { }
