import {Config} from "./config";

export class Constant {
  public static readonly HEALTH = 'localhost:4200';

  public static readonly HEALTH_DEVELOPMENT = 'http://192.168.1.14:3003/';


  public static getHttpsHealthApp(): string {
    return Config.DEVELOP_MODE ? Constant.HEALTH_DEVELOPMENT : Constant.HEALTH;
  }

}
