import {Component, EventEmitter, Output} from '@angular/core'


@Component({
  selector: 'app-app-sama-navbar',
  templateUrl: './app-sama-navbar.component.html',
  styleUrls: ['./app-sama-navbar.component.scss']
})
export class AppSamaNavbarComponent {

  @Output() event = new EventEmitter<boolean>();
  private sideNavEvent?: boolean;

  constructor() {
  }

  onSideNavClick() {
    this.sideNavEvent = !this.sideNavEvent
  }

  emitValue() {
    this.onSideNavClick()
    this.event.emit(this.sideNavEvent)
  }

  onGoToHome() {

  }
}
