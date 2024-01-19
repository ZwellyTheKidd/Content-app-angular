// header.component.ts

import { Component } from '@angular/core';
import { ThemeService } from '../themeservice.service'; // Adjust the path accordingly

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}

toggleTheme() {
  console.log('Toggle Theme'); // Add this line
  const currentTheme = this.themeService.getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  this.themeService.setTheme(newTheme);
}

}
