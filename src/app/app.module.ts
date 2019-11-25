import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MytrendsComponent } from './mytrends/mytrends.component';
import { TopicComponent } from './topic/topic.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
import { FavcategoryComponent } from './favcategory/favcategory.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MytrendsComponent,
    TopicComponent,
    AddtopicComponent,
    FavcategoryComponent,
    NewquestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
