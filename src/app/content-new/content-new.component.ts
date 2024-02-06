import { Component, HostBinding, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

import { Content } from '../content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content-new',
  templateUrl: './content-new.component.html',
  styleUrls: ['./content-new.component.css']
})
export class ContentNewComponent {
  private subscription: Subscription;

  newContent: Content = {
    title: '',
    desc: '',
    status: '',
    contentType: '',
    dateCreated: new Date(),
    dateUpdated: null, // Assign null to dateUpdated initially
    url: ''
  };

  // Local variable to hold the current dark mode state
  isDarkMode!: boolean;

  constructor(
    private themeService: ThemeService,
    private contentService: ContentService) {
    // Subscribe to the theme service
    this.subscription = this.themeService.darkMode$.subscribe((darkMode) => {
      // Update the local variable when the theme changes
      this.isDarkMode = darkMode;
    });
  }

  setTypeValue(type: string): void {
    this.newContent.contentType = type;
  }

  // Method to set the content status
  setStatusValue(status: string): void {
    this.newContent.status = status;
  }

  onDoneClick(): void {
    // Set the dateCreated to the current date
    this.newContent.dateCreated = new Date();

    // Call the addContent method
    this.contentService.addContent(this.newContent)
      .subscribe({
        next: (addedContent: Content) => {
          console.log('New content added:', addedContent);
          // Handle success
        },
        error: (error) => {
          console.error('Error adding new content:', error);
          // Handle error
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
