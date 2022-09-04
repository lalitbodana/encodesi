import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NotificationComponent } from './core/components/notification/notification.component';
import { ContentComponent } from './core/components/content/content.component';
import { CenterContentComponent } from './core/components/center-content/center-content.component';
import { LeftContentComponent } from './core/components/left-content/left-content.component';
import { RightContentComponent } from './core/components/right-content/right-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NotificationComponent,
    ContentComponent,
    CenterContentComponent,
    LeftContentComponent,
    RightContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
