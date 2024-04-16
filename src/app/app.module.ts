import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { PortfolioModule } from './layouts/portfolio/portfolio.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PortfolioModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
