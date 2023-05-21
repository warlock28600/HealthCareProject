import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SamaButtonComponent} from './sama-button/sama-button.component';
import {SamaCheckBoxComponent} from './sama-check-box/sama-check-box.component';
import {SamaDateComponent} from './sama-date/sama-date.component';
import {SamaDropdownComponent} from './sama-dropdown/sama-dropdown.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    SamaButtonComponent,
    SamaCheckBoxComponent,
    SamaDateComponent,
    SamaDropdownComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SamaCommonModule {
}
