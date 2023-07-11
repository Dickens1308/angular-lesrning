import {Component} from '@angular/core';
import {environment} from "../../../../environment/environment";
import {AllImages} from "../../../core/constants/images";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../modules/auth/auth.service";
import {RequestUser} from "../../../modules/auth/requestUser";
import {Observable} from "rxjs";
import {LoginResponse} from "../../../modules/auth/user";
import {Router} from "@angular/router";
import {SecurityService} from "../../../core/services/security.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  buttonName: string = 'Sign In';
  appName: string = environment.company;
  logo: any = this.domSanitizer.bypassSecurityTrustResourceUrl(AllImages.logo);
  errorMessages: string = '';

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

  constructor(private domSanitizer: DomSanitizer, private authService: AuthService, private router: Router, private security: SecurityService) {
  }

  getFormControl(value: string): FormControl {
    return this.formGroup.get(value) as FormControl;
  }

  submitForm(): void {
    if (this.formGroup.valid) {
      this.loginUser();
    } else {
      this.authService.invalidateForm(this.formGroup);
    }
  }

  loginUser(): void {
    let user: RequestUser = {} as RequestUser;
    user.email = this.formGroup.get('email')?.value || '';
    user.password = this.formGroup.get('password')?.value || '';

    const response: Observable<LoginResponse> = this.authService.loginUser(user);

    response.subscribe({
      next: (data: LoginResponse): void => {
        localStorage.setItem(this.security.encryptItem('token'), this.security.encryptData(data.token));
        localStorage.setItem(this.security.encryptItem('user'), this.security.encryptData(JSON.stringify(data.user)));
        localStorage.setItem(this.security.encryptItem('roles'), this.security.encryptData(JSON.stringify(data.roles)));

        this.errorMessages = data.message;
        this.router.navigate(['/dashboard']).then(r => console.log(r));
      },
      error: (error: any): void => {
        console.log(error.error.message);
        this.errorMessages = error.error.message;
      }
    });

  }
}
