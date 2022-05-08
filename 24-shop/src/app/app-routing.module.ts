import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponentComponent} from "./component/home-page-component/home-page-component.component";
import {CategoryPageComponentComponent} from "./component/category-page-component/category-page-component.component";
import {ProductPageComponentComponent} from "./component/product-page-component/product-page-component.component";
import {ContactPageComponentComponent} from "./component/contact-page-component/contact-page-component.component";
import {AboutPageComponentComponent} from "./component/about-page-component/about-page-component.component";
import { GroceryPageComponentComponent } from './component/category-page-component/grocery-page-component/grocery-page-component.component';
import { BeveragesPageComponentComponent } from './component/category-page-component/beverages-page-component/beverages-page-component.component';
import { HouseholdPageComponentComponent } from './component/category-page-component/household-page-component/household-page-component.component';
import { ChilledPageComponentComponent } from './component/category-page-component/chilled-page-component/chilled-page-component.component';
import { FrozenFoodPageComponentComponent } from './component/category-page-component/frozen-food-page-component/frozen-food-page-component.component';

const routes: Routes = [
  {path:'home',component:HomePageComponentComponent},
  {path:'category',component:CategoryPageComponentComponent},
  {path:'category',component:CategoryPageComponentComponent,children:[
    {path:'',redirectTo:'grocery',pathMatch:'full'},
    {path:'grocery',component:GroceryPageComponentComponent},
    {path:'beverages',component:BeveragesPageComponentComponent},
    {path:'household',component:HouseholdPageComponentComponent},
    {path:'chilled',component:ChilledPageComponentComponent},
    {path:'frozen-food',component:FrozenFoodPageComponentComponent},
  ]},
  {path:'product',component:ProductPageComponentComponent},
  {path:'category',component:CategoryPageComponentComponent},
  {path:'contact',component:ContactPageComponentComponent},
  {path:'about',component:AboutPageComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
