import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPhotoComponent } from './post-photo.component';

const routes: Routes = [{ path: '', component: PostPhotoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostPhotoRoutingModule { }
