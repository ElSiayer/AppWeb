import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPhotoRoutingModule } from './post-photo-routing.module';
import { PostPhotoComponent } from './post-photo.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../material.module";


@NgModule({
  declarations: [PostPhotoComponent],
  imports: [
    CommonModule,
    PostPhotoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class PostPhotoModule { }
