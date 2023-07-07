import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {AllImages} from "../../../core/constants/images";

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  errorImage: any = this.domSanitizer.bypassSecurityTrustResourceUrl(AllImages.error);
  constructor(private domSanitizer: DomSanitizer) { }
}
