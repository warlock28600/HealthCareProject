import {Component} from '@angular/core';
import {BaseComponent} from "../../base.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {

  override loadOnline() {
    super.loadOnline();
  }

}
