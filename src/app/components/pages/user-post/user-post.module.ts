import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPostRoutingModule } from './user-post-routing.module';
import { UserPostComponent } from './user-post.component';


@NgModule({
declarations: [UserPostComponent],
  imports: [
    CommonModule,
    UserPostRoutingModule
  ]
})
export class UserPostModule { }
