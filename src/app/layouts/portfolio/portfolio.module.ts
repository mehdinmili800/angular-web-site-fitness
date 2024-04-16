import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PortFolioRouting } from './portfolio.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { PachagesComponent } from 'src/app/pages/pachages/pachages.component';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { GalleryComponent } from 'src/app/pages/gallery/gallery.component';
import { ShopComponent } from 'src/app/pages/shop/shop.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PachagesComponent,
    BlogComponent,
    GalleryComponent,
    ShopComponent,
    EventsComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PortFolioRouting),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortfolioModule { }
