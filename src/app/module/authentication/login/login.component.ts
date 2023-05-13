import {Component, Injector} from '@angular/core';
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

  public constructor(injector:Injector) {
    super(injector)
  }

  override ngOnInit() {
    super.ngOnInit();
  }

}
