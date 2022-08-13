import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { LogoAPComponent } from './componente/header/logo-ap/logo-ap.component';
import { HeroComponent } from './componente/header/hero/hero.component';
import { AboutmeComponent } from './componente/header/aboutme/aboutme.component';
import { ContentComponent } from './componente/content/content.component';
import { ExperienceComponent } from './componente/content/experience/experience.component';
import { EducationComponent } from './componente/content/education/education.component';
import { ProgressBarComponent } from './componente/content/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    HeroComponent,
    AboutmeComponent,
    ContentComponent,
    ExperienceComponent,
    EducationComponent,
    ProgressBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
