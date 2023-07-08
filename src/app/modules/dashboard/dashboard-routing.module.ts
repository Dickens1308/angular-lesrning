import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "../../components/layouts/dashboard/dashboard.component";
import {IndexComponent} from "../../pages/dashboard/index/index.component";
import {canActivateUser} from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [canActivateUser],
    children: [
      {path: '', component: IndexComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
