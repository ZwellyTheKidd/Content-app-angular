import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './theme.service';
import { FooterComponent } from './footer/footer.component';
import { ContentNewComponent } from './content-new/content-new.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentDetailComponent,
    HeaderComponent,
    FooterComponent,
    ContentNewComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
