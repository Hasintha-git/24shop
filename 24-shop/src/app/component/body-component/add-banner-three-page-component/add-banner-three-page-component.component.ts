import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideAnimation } from '../add-banner-three-page-component/side.animation';
import {interval} from 'rxjs';
export interface Tile { 
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-add-banner-three-page-component',
  templateUrl: './add-banner-three-page-component.component.html',
  styleUrls: ['./add-banner-three-page-component.component.scss'],
  animations: [slideAnimation] 
})
export class AddBannerThreePageComponentComponent implements OnInit {

  currentIndex = 0;
  slides = [
    {image: '../../../../assets/adds/ban1.jpg', description: 'Image 01'},

    {image: '../../../../assets/adds/ban2.jpg', description: 'Image 02'},

  ];


  constructor() {
    this.preloadImages();

  }

  preloadImages() {
    this.slides.forEach(slide => {
      (new Image()).src = slide.image;
    });
  }

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }
  
  ngOnInit(): void {
    const obs=interval(6000);
    obs.subscribe((d)=> {
      this.nextSlide()
      
    })
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 3, color: 'lightblue'},
  ];
}
