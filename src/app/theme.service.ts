// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  getCurrentDarkModeState(): boolean {
    return this.darkModeSubject.value;
  }


  toggleDarkMode() {
    // Toggle the darkMode value
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }
}



