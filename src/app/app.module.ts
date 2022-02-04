import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { MediaComponent } from './components/media/media.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PictureComponent } from './components/picture/picture.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    IntroComponent,
    MediaComponent,
    NavbarComponent,
    PictureComponent,
    PresentationComponent,
    ProjectComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
