import {Component, Output} from '@angular/core'


@Component({
  selector: 'app-app-sama-navbar',
  templateUrl: './app-sama-navbar.component.html',
  styleUrls: ['./app-sama-navbar.component.scss']
})
export class AppSamaNavbarComponent {

  @Output() sideNavEvent?: any

  constructor() {
  }

  onSideNavClick() {
    this.sideNavEvent = true
  }

  onGoToHome() {

  }
}
