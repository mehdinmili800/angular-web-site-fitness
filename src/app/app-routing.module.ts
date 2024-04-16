import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:'',redirectTo:'portfolio',pathMatch:'full',
  },

  {
    path:'portfolio',
    component:PortfolioComponent,
    children:[{
      path:'',
      loadChildren: () => import('./layouts/portfolio/portfolio.module').then(m => m.PortfolioModule)
    }]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
