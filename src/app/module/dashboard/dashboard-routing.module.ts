import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteUtil} from "../../util/route.util";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {UserGroupListComponent} from "./user-group-list/user-group-list.component";
import {AddUserGroupComponent} from "./add-user-group/add-user-group.component";
import {UserPasswordChangeComponent} from "./user-password-change/user-password-change.component";
import {FundamentalInformationComponent} from "./fundamental-information/fundamental-information.component";
import {
  AccessAndUpdateInformationComponent
} from "./access-and-update-information/access-and-update-information.component";
import {
  UpdateLoginScreenNotificationComponent
} from "./update-login-screen-notification/update-login-screen-notification.component";
import {
  UpdateMainPageNotificationComponent
} from "./update-main-page-notification/update-main-page-notification.component";
import {LeolinkManagementComponent} from "./leolink-management/leolink-management.component";

const routes: Routes = [
  {
    path: RouteUtil.DASHBOARD_COMPONENT,
    component: DashboardComponent,
  }, {
    path: RouteUtil.HOME_COMPONENT,
    component: HomeComponent,
    children: [
      {
        path: RouteUtil.USER_COMPONENT,
        component: UsersComponent
      }, {
        path: RouteUtil.USER_MANAGEMENT,
        component: UserManagementComponent
      }, {
        path: RouteUtil.USER_GROUP_LIST,
        component: UserGroupListComponent
      }, {
        path: RouteUtil.USER_GROUP_ADD,
        component: AddUserGroupComponent
      }, {
        path: RouteUtil.USER_CHANGE_PASSWORD,
        component: UserPasswordChangeComponent
      }, {
        path: RouteUtil.BASE_INFORMATION_INSERT,
        component: FundamentalInformationComponent
      }, {
        path: RouteUtil.ACCESS_AND_UPDATE_INFORMATION,
        component: AccessAndUpdateInformationComponent
      }, {
        path: RouteUtil.UPDATE_LOGIN_SCREEN_NOTIFICATION,
        component: UpdateLoginScreenNotificationComponent
      }, {
        path: RouteUtil.UPDATE_MAIN_SCREEN_NOTIFICATION,
        component: UpdateMainPageNotificationComponent
      }, {
        path: RouteUtil.LEO_LINK_MANAGEMENT,
        component: LeolinkManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
