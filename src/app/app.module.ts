import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './themeservice.service'; 

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentDetailComponent,
    HeaderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
