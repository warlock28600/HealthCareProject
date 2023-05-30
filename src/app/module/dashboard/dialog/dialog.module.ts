import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddOrUpdateUserComponent} from './add-or-update-user/add-or-update-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SamaCommonModule} from "../../sama-common/sama-common.module";


@NgModule({
  declarations: [
    AddOrUpdateUserComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    SamaCommonModule,
    SamaCommonModule,


  ]
})
export class DialogModule {
}
