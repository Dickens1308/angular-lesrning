import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IndexComponent} from "./dashboard/index/index.component";
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './default/home/home.component';
import {InputsModule} from "../components/inputs/inputs.module";
import {ButtonModule} from "../components/buttons/button.module";
import {RouterLink} from "@angular/router";
import { NotfoundComponent } from './default/notfound/notfound.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BlogsComponent } from './default/blogs/blogs.component';
import {CardsModule} from "../components/cards/cards.module";



@NgModule({
  declarations: [IndexComponent, RegisterComponent, LoginComponent, HomeComponent, NotfoundComponent, ForgotComponent, BlogsComponent],
  exports: [IndexComponent, RegisterComponent, LoginComponent, HomeComponent, NotfoundComponent, ForgotComponent, BlogsComponent],
  imports: [
    CommonModule,
    InputsModule,
    ButtonModule,
    RouterLink,
    NgOptimizedImage,
    ReactiveFormsModule,
    CardsModule
  ]
})
export class PagesModule { }
