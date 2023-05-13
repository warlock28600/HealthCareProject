import {Component} from '@angular/core';
import {UserEntity} from "../common/entity/user.entity";
import {AuthenticatorUtil} from "../util/authenticator.util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HealthCareProject';

  public static userEntity?: UserEntity;

  ngOnInit(): void {
    AppComponent.userEntity = new UserEntity();
    if (AuthenticatorUtil.hasAccount()) {
      UserEntity.buildSelfUser();
    }
  }
}
