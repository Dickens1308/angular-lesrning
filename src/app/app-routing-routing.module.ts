import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./pages/default/notfound/notfound.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/general/general.module').then(m => m.GeneralModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
