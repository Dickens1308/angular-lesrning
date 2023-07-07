import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {RequestUser} from "./requestUser";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser = (user: RequestUser): void => {}

  loginUser = (user: RequestUser): void => {
    console.log(user.email, user.password, user.remember);
  }

  invalidateForm(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control: any): void => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.invalidateForm(control);
      }
    });
  }
}
