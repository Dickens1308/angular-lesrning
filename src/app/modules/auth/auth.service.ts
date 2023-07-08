import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {RequestUser} from "./requestUser";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "./user";
import {Observable} from "rxjs";
import {urls} from "../../core/constants/urls";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser = (user: RequestUser): Observable<LoginResponse> => {
    return this.httpClient.post<LoginResponse>(`${urls.registerUrl}`, {
      username: user.username,
      email: user.email,
      password: user.password,
      agreement: user.agreement,
    });
  }

  loginUser = (user: RequestUser): Observable<LoginResponse> => {
    return this.httpClient.post<LoginResponse>(`${urls.loginUrl}`, {
      email: user.email,
      password: user.password,
    });
  }

  invalidateForm = (formGroup: FormGroup): void => {
    Object.values(formGroup.controls).forEach((control: any): void => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.invalidateForm(control);
      }
    });
  }

  loggedIn = (): boolean => {
    return !!localStorage.getItem('token');
  }
}
