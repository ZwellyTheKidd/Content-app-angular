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
    id: 0,
    title: '',
    desc: '',
    status: '',
    contentType: '',
    dateCreated: new Date(),
    dateUpdated: new Date(),
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

  setTypeValue(value: string): void {
    this.newContent.contentType = value;
  }

  setStatusValue(value: string): void {
    this.newContent.status = value;
  }

// TypeScript code for handling "Done" button click event
onDoneClick(): void {
  // Gather input values
  const titleInput = (document.getElementById('title') as HTMLInputElement)?.value || '';
  const descriptionInput = (document.getElementById('description') as HTMLTextAreaElement)?.value || '';
  const typeInput = (document.getElementById('typeInput') as HTMLInputElement)?.value || '';
  const statusInput = (document.getElementById('statusInput') as HTMLInputElement)?.value || '';
  const urlInput = (document.getElementById('url') as HTMLInputElement)?.value || '';

  // Assign input values to newContent
  this.newContent.title = titleInput;
  this.newContent.desc = descriptionInput;
  this.newContent.contentType = typeInput;
  this.newContent.status = statusInput;
  this.newContent.url = urlInput;

  // Call addContent method
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
