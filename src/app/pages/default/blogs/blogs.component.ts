import {Component} from '@angular/core';
import {PostModel} from "../../../modules/general/post.model";
import {PostService} from "../../../modules/general/post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent {
  postList$: Observable<PostModel[]>;
  loadingPost: boolean = false;

  constructor(private postService: PostService) {
    this.loadingPost = true;
    this.postList$ = postService.getPostList();
    this.loadingPost = false;
  }
}
