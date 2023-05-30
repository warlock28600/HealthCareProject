import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sama-button',
  templateUrl: './sama-button.component.html',
  styleUrls: ['./sama-button.component.scss']
})
export class SamaButtonComponent {

  @Input()
  title?: string;
  @Input()
  required: boolean = false;
  @Input()
  disabled?: boolean;
}
