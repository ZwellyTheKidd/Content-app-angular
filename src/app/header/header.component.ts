// header.component.ts

import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  darkMode = false;

  @HostBinding('class.dark') get mode() { 
    return this.darkMode;
}

}
