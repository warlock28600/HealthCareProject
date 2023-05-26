import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SamaButtonComponent} from './sama-button/sama-button.component';
import {SamaCheckBoxComponent} from './sama-check-box/sama-check-box.component';
import {SamaDateComponent} from './sama-date/sama-date.component';
import {MatIconModule} from "@angular/material/icon";
import {SamaTableComponent} from './sama-table/sama-table.component';
import {SamaInputComponent} from './sama-input/sama-input.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    SamaButtonComponent,
    SamaCheckBoxComponent,
    SamaDateComponent,
    SamaTableComponent,
    SamaInputComponent
  ],
  exports: [
    SamaTableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule
  ]
})
export class SamaCommonModule {
}
