import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppsComponent} from "../../components/layouts/apps/apps.component";
import {HomeComponent} from "../../pages/default/home/home.component";
import {BlogsComponent} from "../../pages/default/blogs/blogs.component";

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    children: [
      { path: "", component:HomeComponent},
      { path: "about-us", component:HomeComponent},
      { path: "contact-us", component:HomeComponent},
      { path: "blog", component: BlogsComponent},
      { path: "blog/:id", component: HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
