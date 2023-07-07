import { Component } from '@angular/core';
import {environment} from "../../../../environment/environment";
import {AllImages} from "../../../core/constants/images";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  buttonName: string = 'Forgot Password';
  appName: string = environment.company;
  logo: any = this.domSanitizer.bypassSecurityTrustResourceUrl(AllImages.logo);
  constructor(private domSanitizer: DomSanitizer) { }
}
