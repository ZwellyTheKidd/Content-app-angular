// content.component.ts
import { Component, HostBinding } from '@angular/core';
import {ContentDetailComponent} from '../content-detail/content-detail.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  darkMode = false;

  @HostBinding('class.dark') get mode() { 
    return this.darkMode;
}



}
