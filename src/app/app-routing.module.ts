import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentNewComponent } from './content-new/content-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',title:"home", component: ContentComponent },
  { path: 'content',title:"edit content", component: ContentDetailComponent },
  { path: 'new',title:"new content", component: ContentNewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
