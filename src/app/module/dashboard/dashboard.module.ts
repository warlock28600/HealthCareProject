import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {AppSamaNavbarComponent} from "../../sama-common/app-sama-navbar/app-sama-navbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppSamaSideNavComponent} from "../../sama-common/app-sama-side-nav/app-sama-side-nav.component";
import {UsersComponent} from './users/users.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AppSamaNavbarComponent,
    AppSamaSideNavComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class DashboardModule { }
