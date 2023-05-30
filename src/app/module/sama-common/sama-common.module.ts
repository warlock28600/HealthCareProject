import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";

import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {SamaInputComponent} from "./sama-input/sama-input.component";
import {SamaDropdownComponent} from "./sama-dropdown/sama-dropdown.component";
import {SamaSelectComponent} from "./sama-select/sama-select.component";
import {SamaButtonComponent} from "./sama-button/sama-button.component";
import {SamaCheckboxComponent} from "./sama-checkbox/sama-checkbox.component";
import {SamaDateComponent} from "./sama-date/sama-date.component";
import {SamaTableComponent} from "./sama-table/sama-table.component";


@NgModule({
  declarations: [
    SamaInputComponent,
    SamaDropdownComponent,
    SamaSelectComponent,
    SamaButtonComponent,
    SamaCheckboxComponent,
    SamaDateComponent,
    SamaTableComponent
  ],
  exports: [
    SamaInputComponent,
    SamaDropdownComponent,
    SamaSelectComponent,
    SamaButtonComponent,
    SamaCheckboxComponent,
    SamaDateComponent,
    SamaTableComponent
  ], imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ]
})
export class SamaCommonModule {
}
