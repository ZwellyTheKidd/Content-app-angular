// theme.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'light';

  getTheme(): string {
    return this.currentTheme;
  }

  setTheme(theme: string): void {
    this.currentTheme = theme;
    document.body.classList.toggle('dark', theme === 'dark');
    // You can add more logic here to apply the theme to other elements in your application.
  }
}
