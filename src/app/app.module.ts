import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { ExpectationsComponent } from './Components/expectations/expectations.component';
import { ImportantComponent } from './Components/important/important.component';
import { LinkCardsComponent } from './Components/link-cards/link-cards.component';
import { GradesComponent } from './Layouts/grades/grades.component';
import { ToolsComponent } from './Layouts/tools/tools.component';
import { MessagesComponent } from './Layouts/messages/messages.component';
import { CoursesComponent } from './Layouts/courses/courses.component';
import { ActivityComponent } from './Layouts/activity/activity.component';
import { HomeComponent } from './Layouts/home/home.component';
import { TitleBannerComponent } from './Components/title-banner/title-banner.component';
import { SubtitleBannerComponent } from './Components/subtitle-banner/subtitle-banner.component';
import { GradeCardsComponent } from './Components/grade-cards/grade-cards.component';
import { MessageCardsComponent } from './Components/message-cards/message-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ExpectationsComponent,
    ImportantComponent,
    LinkCardsComponent,
    GradesComponent,
    ToolsComponent,
    MessagesComponent,
    CoursesComponent,
    ActivityComponent,
    HomeComponent,
    TitleBannerComponent,
    SubtitleBannerComponent,
    GradeCardsComponent,
    MessageCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
