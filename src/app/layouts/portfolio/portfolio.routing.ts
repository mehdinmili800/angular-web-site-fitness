import { Routes } from "@angular/router";
import { AboutComponent } from "src/app/pages/about/about.component";
import { BlogComponent } from "src/app/pages/blog/blog.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { EventsComponent } from "src/app/pages/events/events.component";
import { GalleryComponent } from "src/app/pages/gallery/gallery.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { PachagesComponent } from "src/app/pages/pachages/pachages.component";
import { ShopComponent } from "src/app/pages/shop/shop.component";

export const PortFolioRouting: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },

    {
        path: 'about', component: AboutComponent
    },

    {
        path: 'pachages', component: PachagesComponent
    },

    {
        path: 'blog', component: BlogComponent
    },
    
    {
        path: 'gallery', component: GalleryComponent
    },

    {
        path: 'shop', component: ShopComponent
    },

    {
        path: 'events', component: EventsComponent
    },

    {
        path: 'contact', component: ContactComponent
    }

]