import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {AppSamaNavbarComponent} from "../../sama-common/app-sama-navbar/app-sama-navbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
    declarations: [
        DashboardComponent,
        HomeComponent,
        AppSamaNavbarComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
