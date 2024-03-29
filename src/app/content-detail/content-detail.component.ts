import { Component, HostBinding, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent {
  private subscription: Subscription;

  // Local variable to hold the current dark mode state
  isDarkMode!: boolean;

  constructor(private themeService: ThemeService) {
    // Subscribe to the theme service
    this.subscription = this.themeService.darkMode$.subscribe((darkMode) => {
      // Update the local variable when the theme changes
      this.isDarkMode = darkMode;
    });
  }

  // Bind the class based on the local variable
  @HostBinding('class.dark') get mode() {
    return this.isDarkMode;
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }

}
