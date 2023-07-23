import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { LandingCaraouselComponent } from './components/landing-caraousel/landing-caraousel.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { WhatWeDoSectionComponent } from './components/what-we-do-section/what-we-do-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { CounterSectionComponent } from './components/counter-section/counter-section.component';
import { OurBlogSectionComponent } from './components/our-blog-section/our-blog-section.component';
import { ClientsSectionComponent } from './components/clients-section/clients-section.component';
import { TeamsSectionComponent } from './components/teams-section/teams-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingCaraouselComponent,
    WelcomeSectionComponent,
    WhatWeDoSectionComponent,
    ServicesSectionComponent,
    CounterSectionComponent,
    OurBlogSectionComponent,
    ClientsSectionComponent,
    TeamsSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
