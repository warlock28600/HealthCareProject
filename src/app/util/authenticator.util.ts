import {SharedPreferencesUtil} from "./shared.preferences.util";
import {Config} from "../common/config";

export class AuthenticatorUtil {

  public static saveAccount(token: string): boolean {
    SharedPreferencesUtil.saveString('ACCOUNT_TOKEN', token);
    Config.TOKEN = token;
    return true;
  }

  public static getAccountToken(): string | null {
    Config.TOKEN = <string>SharedPreferencesUtil.loadString('ACCOUNT_TOKEN', null);
    return SharedPreferencesUtil.loadString('ACCOUNT_TOKEN', null);
  }

  public static hasAccount(): boolean {
    return SharedPreferencesUtil.loadString('ACCOUNT_TOKEN', null) != null;
  }

  public static removeAccount(): boolean {
    SharedPreferencesUtil.remove('ACCOUNT_TOKEN');
    return true;
  }
}
