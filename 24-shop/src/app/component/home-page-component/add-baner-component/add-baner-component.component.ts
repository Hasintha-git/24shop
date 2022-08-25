import {Component, OnInit} from '@angular/core';
import {slideAnimation} from '../add-baner-component/side.animation';
import {interval} from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-add-baner-component',
  templateUrl: './add-baner-component.component.html',
  styleUrls: ['./add-baner-component.component.scss'],
  animations: [slideAnimation]
})

export class AddBanerComponentComponent implements OnInit {
  currentIndex = 0;
  slides = [
    // {image: '../../../../assets/banners/vegitable.png', description: 'Image 01'},
    // {image: '../../../../assets/banners/delivery.png', description: 'Image 03'},
    // {image: '../../../../assets/banners/spicy.png', description: 'Image 04'},
    {image: '../../../../assets/adds/01.jpg', description: 'Image 01'},
    {image: '../../../../assets/adds/02.jpg', description: 'Image 03'},
    {image: '../../../../assets/adds/03.jpg', description: 'Image 03'},
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

