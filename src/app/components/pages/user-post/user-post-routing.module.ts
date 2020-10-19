import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPostComponent } from './user-post.component';

const routes: Routes = [{ path: '', component: UserPostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPostRoutingModule { }
