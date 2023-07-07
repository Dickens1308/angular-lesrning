import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "./post.model";
import {environment} from "../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {
  }

  getPostList(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(environment.blogUrl);
  }
}
