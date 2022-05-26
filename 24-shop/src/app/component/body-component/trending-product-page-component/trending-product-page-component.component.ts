import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideAnimation } from '../trending-product-page-component/side.animation';
import {interval} from 'rxjs';
// import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-trending-product-page-component',
  templateUrl: './trending-product-page-component.component.html',
  styleUrls: ['./trending-product-page-component.component.scss'],
  animations: [slideAnimation] 
})
export class TrendingProductPageComponentComponent implements OnInit {

  currentIndex = 0;
  slides = [
    {image: '../../../../assets/banners/vegitable.png', description: 'Image 05'},
    {image: '../../../../assets/banners/iceCream.png', description: 'Image 07'},
    {image: '../../../../assets/banners/spicy.png', description: 'Image 06'},
  ];


  currentData:Array<any>=[];
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;

  constructor() { 
    this.currentData=[1,2,3,4,5];
    this.price='44';
    this.oldprice='48';
    this.imgurl="../../assets/categoryIcons/vegi.png";
    this.status="New";
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
