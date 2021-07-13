import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-view/navbar/navbar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroSectionComponent } from './home-page/hero-section/hero-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './home-page/about/about.component';
import { BoardComponent } from './home-page/board/board.component';
import { DivisionsComponent } from './home-page/divisions/divisions.component';
import { SlideinfoComponent } from './home-page/divisions/slideinfo/slideinfo.component';
import { SlideimgsComponent } from './home-page/divisions/slideimgs/slideimgs.component';
import { DivsionComponent } from './divsion/divsion.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './main-view/footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainViewComponent,
    HomePageComponent,
    HeroSectionComponent,
    AboutComponent,
    BoardComponent,
    DivisionsComponent,
    SlideinfoComponent,
    SlideimgsComponent,
    DivsionComponent,
    NewsComponent,
    AboutUsComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
