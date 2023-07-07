import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    PostComponent
  ],
  exports: [PostComponent],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CardsModule { }
