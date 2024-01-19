// header.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  darkMode!: boolean;

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    // Initialize darkMode property with the current theme state
    this.darkMode = this.themeService.getCurrentDarkModeState();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
