import {Component} from '@angular/core';
import {environment} from "../../../../environment/environment";
import {AllImages} from "../../../core/constants/images";
import {DomSanitizer} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../modules/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  buttonName: string = 'Sign In';
  appName: string = environment.company;
  logo: any = this.domSanitizer.bypassSecurityTrustResourceUrl(AllImages.logo);

  formGroup: FormGroup = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  protected readonly event = event;

  constructor(private domSanitizer: DomSanitizer, private authService: AuthService) {
  }

  getFormControl(value: string): FormControl {
    return this.formGroup.get(value) as FormControl;
  }

  submitForm(): void {
    if (this.formGroup.valid) {
      console.log("Form is valid")
    } else {
      console.log("Form is invalid");
      this.authService.invalidateForm(this.formGroup);
    }
  }
}
