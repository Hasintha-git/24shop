import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-category-card-component',
  templateUrl: './category-card-component.component.html',
  styleUrls: ['./category-card-component.component.scss']
})
export class CategoryCardComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;
  fxFlex:any;

  constructor(private route:Router) { 
    this.currentData=['grocery','beverages','household','chilled','frozen-food'];
    this.imgurl="../../../assets/categoryIcons/vegi.png";
    this.fxFlex="18%"
  }
  ngOnInit(): void {
  }
  goToCategory(num:any){
    this.route.navigate(['/category/'+num])
    console.log(num+"hi");
    
  }

}
