import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router
import {CategoryServiceService} from 'src/app/services/Category/category-service.service';

@Component({
  selector: 'app-category-card-component',
  templateUrl: './category-card-component.component.html',
  styleUrls: ['./category-card-component.component.scss']
})
export class CategoryCardComponentComponent implements OnInit {
  currentData:Array<any>=[];
  // imgurl:any;
  fxFlex:any;

  constructor(private route: Router, private catService: CategoryServiceService) {
    // this.currentData=[
    //   {imgUrl:'https://media.istockphoto.com/photos/food-background-with-assortment-of-fresh-organic-vegetables-picture-id1203599923?b=1&k=20&m=1203599923&s=170667a&w=0&h=SxSyRNqrW8JQsyh6gCktCwcc16yX-Ymo2-I7NNTRtcA=',title:'cat'},
    //   {imgUrl:'https://media.istockphoto.com/photos/food-background-with-assortment-of-fresh-organic-vegetables-picture-id1203599923?b=1&k=20&m=1203599923&s=170667a&w=0&h=SxSyRNqrW8JQsyh6gCktCwcc16yX-Ymo2-I7NNTRtcA=',title:'sed'},
    // ]

  }
  ngOnInit(): void {
    this.loadCategory()
  }
  goToCategory(num:any){
    this.route.navigate(['/category/'+num])
  }

  loadCategory(){
    this.catService.getCategory().then((res)=> {
      for (let i = 0; i < res.size; i++) {

        this.currentData[i]=res.docs[i].data();
      }
  })
  }

}
