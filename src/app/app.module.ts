/* JavaScript imports */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from "./components/components.module";
import {PagesModule} from "./pages/pages.module";
import {AuthModule} from "./modules/auth/auth.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {GeneralModule} from "./modules/general/general.module";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
    AuthModule,
    DashboardModule,
    GeneralModule,
    RouterOutlet,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
