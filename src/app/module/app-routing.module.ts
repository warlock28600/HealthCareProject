import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteUtil} from "../util/route.util";

const routes: Routes = [
  {
    path: RouteUtil.AUTHENTICATION_MODULE,
    loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)
  }, {
    path: RouteUtil.DASHBOARD_MODULE,
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
