import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponentComponent} from "./component/home-page-component/home-page-component.component";
import {CategoryPageComponentComponent} from "./component/category-page-component/category-page-component.component";
import {ContactPageComponentComponent} from "./component/contact-page-component/contact-page-component.component";
import {AboutPageComponentComponent} from "./component/about-page-component/about-page-component.component";
import { GroceryPageComponentComponent } from './component/category-page-component/grocery-page-component/grocery-page-component.component';
import { BeveragesPageComponentComponent } from './component/category-page-component/beverages-page-component/beverages-page-component.component';
import { HouseholdPageComponentComponent } from './component/category-page-component/household-page-component/household-page-component.component';
import { ChilledPageComponentComponent } from './component/category-page-component/chilled-page-component/chilled-page-component.component';
import { FrozenFoodPageComponentComponent } from './component/category-page-component/frozen-food-page-component/frozen-food-page-component.component';
import { OrderAddPageComponentComponent } from './component/order-add-page-component/order-add-page-component.component';
import { SearchResultPageComponentComponent } from './component/search-result-page-component/search-result-page-component.component';
import { PrivacyPageComponentComponent } from './component/privacy-page-component/privacy-page-component.component';
import { DeliveryPageComponentComponent } from './component/delivery-page-component/delivery-page-component.component';
import { LoginPageComponentComponent } from './component/login-page-component/login-page-component.component'
import { OrderConfirmPageComponentComponent } from './component/order-confirm-page-component/order-confirm-page-component.component';
import { RegisterPageComponentComponent } from './component/register-page-component/register-page-component.component';
import {AuthGuard, canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { NotFoundPageComponentComponent } from './component/not-found-page-component/not-found-page-component.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['home']);

const routes: Routes = [ 
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponentComponent,children:[
    {path:'grocery',component:GroceryPageComponentComponent},
    {path:'beverages',component:BeveragesPageComponentComponent},
    {path:'household',component:HouseholdPageComponentComponent},
    {path:'chilled',component:ChilledPageComponentComponent},
    {path:'frozen-food',component:FrozenFoodPageComponentComponent},
  ]},
  {path:'category',component:CategoryPageComponentComponent},
  {path:'category',component:CategoryPageComponentComponent,children:[
    {path:'',redirectTo:'grocery',pathMatch:'full'},
    {path:'grocery',component:GroceryPageComponentComponent},
    {path:'beverages',component:BeveragesPageComponentComponent},
    {path:'household',component:HouseholdPageComponentComponent},
    {path:'chilled',component:ChilledPageComponentComponent},
    {path:'frozen-food',component:FrozenFoodPageComponentComponent},
  ]},
  

  {path:'privacy',component:PrivacyPageComponentComponent },
  {path:'delivery',component:DeliveryPageComponentComponent},
  {path:'category',component:CategoryPageComponentComponent},
  {path:'contact',component:ContactPageComponentComponent},
  {path:'about',component:AboutPageComponentComponent},
  {path:'order',component:OrderAddPageComponentComponent },
  {path:'orderConfirm',component:OrderConfirmPageComponentComponent,canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:'search',component:SearchResultPageComponentComponent},
  {path:'register',component:RegisterPageComponentComponent},
  {path:'**',component:NotFoundPageComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
