import { Component } from '@angular/core';
import {environment} from "../../../../environment/environment";
import {AllImages} from "../../../core/constants/images";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  appName: string = environment.company;
  logo: any = this.domSanitizer.bypassSecurityTrustResourceUrl(AllImages.logo);
  constructor(private domSanitizer: DomSanitizer) { }
}
