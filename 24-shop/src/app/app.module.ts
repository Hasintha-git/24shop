import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './component/home-page-component/home-page-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponentComponent } from './component/nav-bar-component/nav-bar-component.component';
import { CategoryPageComponentComponent } from './component/category-page-component/category-page-component.component';
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
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { TrendingProductPageComponentComponent } from './component/body-component/trending-product-page-component/trending-product-page-component.component';
import { OrderAddPageComponentComponent } from './component/order-add-page-component/order-add-page-component.component';
import { SearchResultPageComponentComponent } from './component/search-result-page-component/search-result-page-component.component';
import { AddBannerTwoPageComponentComponent } from './component/home-page-component/add-banner-two-page-component/add-banner-two-page-component.component';
import { AddBannerThreePageComponentComponent } from './component/body-component/add-banner-three-page-component/add-banner-three-page-component.component';
import { PrivacyPageComponentComponent } from './component/privacy-page-component/privacy-page-component.component';
import { DeliveryPageComponentComponent } from './component/delivery-page-component/delivery-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    NavBarComponentComponent,
    CategoryPageComponentComponent,
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
    TrendingProductPageComponentComponent,
    OrderAddPageComponentComponent,
    SearchResultPageComponentComponent,
    AddBannerTwoPageComponentComponent,
    AddBannerThreePageComponentComponent,
    PrivacyPageComponentComponent,
    DeliveryPageComponentComponent,
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
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
