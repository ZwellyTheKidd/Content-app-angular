import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'content', component: ContentDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
