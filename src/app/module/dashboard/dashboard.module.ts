import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {UsersComponent} from './users/users.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from "@angular/material/toolbar";
import {UserGroupListComponent} from './user-group-list/user-group-list.component';
import {AddUserGroupComponent} from './add-user-group/add-user-group.component';
import {UserManagementComponent} from './user-management/user-management.component';
import {UserPasswordChangeComponent} from './user-password-change/user-password-change.component';
import {FundamentalInformationComponent} from './fundamental-information/fundamental-information.component';
import {
  AccessAndUpdateInformationComponent
} from './access-and-update-information/access-and-update-information.component';
import {
  UpdateLoginScreenNotificationComponent
} from './update-login-screen-notification/update-login-screen-notification.component';
import {
  UpdateMainPageNotificationComponent
} from './update-main-page-notification/update-main-page-notification.component';
import {LeolinkManagementComponent} from './leolink-management/leolink-management.component';
import {FormsModule} from "@angular/forms";
import {SamaCommonModule} from "../../sama-common/sama-common.module";


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UsersComponent,
    UserGroupListComponent,
    AddUserGroupComponent,
    UserManagementComponent,
    UserPasswordChangeComponent,
    FundamentalInformationComponent,
    AccessAndUpdateInformationComponent,
    UpdateLoginScreenNotificationComponent,
    UpdateMainPageNotificationComponent,
    LeolinkManagementComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    FormsModule,
    SamaCommonModule,

  ]
})
export class DashboardModule { }
