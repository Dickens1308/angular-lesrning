import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    AppsComponent
  ],
  exports: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    AppsComponent,
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ]
})
export class LayoutsModule { }
