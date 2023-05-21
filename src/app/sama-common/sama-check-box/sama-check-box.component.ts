import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sama-check-box',
  templateUrl: './sama-check-box.component.html',
  styleUrls: ['./sama-check-box.component.scss']
})
export class SamaCheckBoxComponent {

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
