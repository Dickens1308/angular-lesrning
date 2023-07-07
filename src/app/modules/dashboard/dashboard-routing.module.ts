import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../components/layouts/dashboard/dashboard.component";
import {IndexComponent} from "../../pages/dashboard/index/index.component";

const routes: Routes = [
  {
    path: '', // <---- parent component declared here
    component: DashboardComponent,
    children: [
      {path: "", component: IndexComponent}, // <---- child components declared here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
