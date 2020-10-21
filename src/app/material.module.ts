import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';


const impMaterial=[MatListModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSelectModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,impMaterial    
  ],
  exports:[impMaterial]
})
export class MaterialModule { }