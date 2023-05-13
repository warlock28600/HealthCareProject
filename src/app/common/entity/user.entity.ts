import {Config} from "../config";
import {AuthenticatorUtil} from "../../util/authenticator.util";
import {AppComponent} from "../../module/app.component";

export class UserEntity {

  public static buildSelfUser(): UserEntity {
    Config.TOKEN = <string>AuthenticatorUtil.getAccountToken();
    return AppComponent.userEntity!;
  }

  public static signOut(): void {
    if (!AuthenticatorUtil.removeAccount()) {
      return;
    }
    Config.TOKEN = undefined;
    UserEntity.buildSelfUser();
  }
}
