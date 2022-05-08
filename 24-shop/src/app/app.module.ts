import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './component/home-page-component/home-page-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponentComponent } from './component/nav-bar-component/nav-bar-component.component';
import { CategoryPageComponentComponent } from './component/category-page-component/category-page-component.component';
import { ProductPageComponentComponent } from './component/product-page-component/product-page-component.component';
import { ContactPageComponentComponent } from './component/contact-page-component/contact-page-component.component';
import { AboutPageComponentComponent } from './component/about-page-component/about-page-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchBarComponentComponent } from './component/search-bar-component/search-bar-component.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddBanerComponentComponent } from './component/home-page-component/add-baner-component/add-baner-component.component';
import { FooterSectionComponentComponent } from './component/footer-section-component/footer-section-component.component';
import { CategoryCardComponentComponent } from './component/category-card-component/category-card-component.component';
import {MatCardModule} from '@angular/material/card';
import { BodyComponentComponent } from './component/body-component/body-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { GroceryPageComponentComponent } from './component/category-page-component/grocery-page-component/grocery-page-component.component';
import { BeveragesPageComponentComponent } from './component/category-page-component/beverages-page-component/beverages-page-component.component';
import { HouseholdPageComponentComponent } from './component/category-page-component/household-page-component/household-page-component.component';
import { ChilledPageComponentComponent } from './component/category-page-component/chilled-page-component/chilled-page-component.component';
import { FrozenFoodPageComponentComponent } from './component/category-page-component/frozen-food-page-component/frozen-food-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    NavBarComponentComponent,
    CategoryPageComponentComponent,
    ProductPageComponentComponent,
    ContactPageComponentComponent,
    AboutPageComponentComponent,
    SearchBarComponentComponent,
    AddBanerComponentComponent,
    FooterSectionComponentComponent,
    CategoryCardComponentComponent,
    BodyComponentComponent,
    GroceryPageComponentComponent,
    BeveragesPageComponentComponent,
    HouseholdPageComponentComponent,
    ChilledPageComponentComponent,
    FrozenFoodPageComponentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
