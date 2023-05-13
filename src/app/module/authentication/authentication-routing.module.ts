import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteUtil} from "../../util/route.util";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: RouteUtil.LOGIN_COMPONENT,
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
