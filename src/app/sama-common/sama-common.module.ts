import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SamaButtonComponent} from './sama-button/sama-button.component';
import {SamaCheckBoxComponent} from './sama-check-box/sama-check-box.component';
import {SamaDateComponent} from './sama-date/sama-date.component';
import {SamaDropdownComponent} from './sama-dropdown/sama-dropdown.component';
import {MatIconModule} from "@angular/material/icon";
import {SamaTableComponent} from './sama-table/sama-table.component';


@NgModule({
  declarations: [
    SamaButtonComponent,
    SamaCheckBoxComponent,
    SamaDateComponent,
    SamaDropdownComponent,
    SamaTableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SamaCommonModule {
}
