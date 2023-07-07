import {Component} from '@angular/core';
import {environment} from "../../../../environment/environment";
import {AllImages} from "../../../core/constants/images";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../modules/auth/auth.service";
import {RequestUser} from "../../../modules/auth/requestUser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  buttonName: string = 'Sign Up';
  appName: string = environment.company;
  logo: any = this.domSanitizer.bypassSecurityTrustResourceUrl(AllImages.logo);
  formGroup: FormGroup = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
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
      let user: RequestUser = {} as RequestUser;
      user.username = this.formGroup.get('username')?.value || '';
      user.email = this.formGroup.get('email')?.value || '';
      user.password = this.formGroup.get('password')?.value || '';
      user.agreement = true;

      this.authService.registerUser(user);
    } else {
      console.log("Form is invalid");
      this.authService.invalidateForm(this.formGroup);
    }
  }
}
