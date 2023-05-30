import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sama-checkbox',
  templateUrl: './sama-checkbox.component.html',
  styleUrls: ['./sama-checkbox.component.scss']
})
export class SamaCheckboxComponent {

  @Input()
  value?: boolean;
  @Input()
  title?: string;
  @Input()
  required: boolean = false;
  @Input()
  disabled: boolean = false;
  @Output()
  valueChange: EventEmitter<boolean> = new EventEmitter();

  onLabelClicked() {
    if (!this.disabled) {
      this.value = !this.value;
      this.valueChange.emit(this.value);
    }
  }
}
