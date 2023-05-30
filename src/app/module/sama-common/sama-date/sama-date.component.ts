import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as moment from "jalali-moment";

@Component({
  selector: 'app-sama-date',
  templateUrl: './sama-date.component.html',
  styleUrls: ['./sama-date.component.scss']
})
export class SamaDateComponent {

  @Input()
  value?: string | null;
  @Input()
  title?: string;
  @Input()
  required: boolean = false;
  @Input()
  disabled: boolean = false;
  @Output()
  valueChange: EventEmitter<string | null> = new EventEmitter();

  onDateChange(event: any) {
    this.valueChange.emit(this.castToGeorgian(event.value!));
  }

  castToGeorgian(date: string): string | null {
    if (date && date !== '') {
      return moment(date, 'YYYY/MM/DDThh:mm:ss.000Z').locale('en').format('YYYY-MM-DDThh:mm:ss.000Z');
    }
    return null;
  }
}
