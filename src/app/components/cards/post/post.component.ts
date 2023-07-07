import {Component, Input} from '@angular/core';
import {PostModel} from "../../../modules/general/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: PostModel;
}
