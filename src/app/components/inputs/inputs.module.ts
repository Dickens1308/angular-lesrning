import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordComponent} from './password/password.component';
import {EmailComponent} from './email/email.component';
import {UsernameComponent} from './username/username.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PasswordComponent,
    EmailComponent,
    UsernameComponent
  ],
  exports: [
    PasswordComponent,
    EmailComponent,
    UsernameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class InputsModule {
}
