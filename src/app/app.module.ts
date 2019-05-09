import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPannelComponent } from './top-pannel/top-pannel.component';
import { AdvertisementBannerComponent } from './advertisement-banner/advertisement-banner.component';
import { PannelsComponent } from './pannels/pannels.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarCardListComponent } from './car-card-list/car-card-list.component';
import { CarCardGalleryComponent } from './car-card-gallery/car-card-gallery.component';
import { CardInfoInDetailComponent } from './card-info-in-detail/card-info-in-detail.component';
import { SecondComponent } from './second/second.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { CarDescriptionComponent } from './car-description/car-description.component';
import { CrouselComponent } from './crousel/crousel.component';


@NgModule({
  declarations: [
    AppComponent,
    TopPannelComponent,
    AdvertisementBannerComponent,
    PannelsComponent,
    CarCardComponent,
    CarCardListComponent,
    CarCardGalleryComponent,
    CardInfoInDetailComponent,
    SecondComponent,
    BreadcrumsComponent,
    CarDescriptionComponent,
    CrouselComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
