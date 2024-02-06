import { Component, HostBinding, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

import { Content } from '../content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnDestroy {
  private subscription: Subscription;

  
  products: Content[] = [];

  // Local variable to hold the current dark mode state
  isDarkMode!: boolean;

  constructor(private themeService: ThemeService,private ContentService: ContentService) {
    // Subscribe to the theme service
    this.subscription = this.themeService.darkMode$.subscribe((darkMode) => {
      // Update the local variable when the theme changes
      this.isDarkMode = darkMode;
    });
  }



  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(): void {
    this.ContentService.getContent()
      .subscribe(products => {
        console.log('Product Data:', products);

        if (Array.isArray(products)) {
          this.products = products;
        } else {
          console.error('Invalid response format. Expected an array of products.');
        }
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
