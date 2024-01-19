// content.component.ts
import { Component } from '@angular/core';
import { themeChange } from 'theme-change';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  toggleTheme() {
    themeChange();
  }
}
