import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {ItemServiceService} from 'src/app/services/items/item-service.service';
import {PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';

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
  pageSlice:Array<any>=[];

  constructor(private itemService: ItemServiceService, private route: Router) {
    this.preloadImages();
    this.loadTrending();
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

  onPageChange(event: PageEvent) {
    const startIndex=event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex>this.currentData.length) {
      endIndex = this.currentData.length;
    }
    this.pageSlice =this.currentData.slice(startIndex,endIndex)
  }

  loadTrending(){
    this.itemService.getTrending(14).then((res)=> {
      for (let i = 0; i < res.size; i++) {

        this.pageSlice[i]=res.docs[i].data();
      }
  })

  }

  orderSet(list:any) {
    sessionStorage.setItem('buyItem',list.title)
    this.route.navigate(['/order'])
  }
}
