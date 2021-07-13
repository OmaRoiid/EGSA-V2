import { NewsComponent } from './news/news.component';
import { DivisionsComponent } from './home-page/divisions/divisions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivsionComponent } from './divsion/divsion.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'divisions',
        component: DivsionComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'About-Us',
        component: AboutUsComponent,
      },
      {
        path: 'Contact-Us',
        component: ContactUsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
