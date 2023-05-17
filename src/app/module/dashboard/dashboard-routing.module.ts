import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteUtil} from "../../util/route.util";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: RouteUtil.DASHBOARD_COMPONENT,
    component: DashboardComponent,
    children: [
      {
        path: RouteUtil.HOME_COMPONENT,
        component: HomeComponent
      }, {
        path: RouteUtil.USER_COMPONENT,
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
