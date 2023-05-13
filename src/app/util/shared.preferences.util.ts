export class SharedPreferencesUtil {

  public static saveString(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public static loadString(key: string, defaultValue: string | null): string | null {
    return localStorage.getItem(key) == null ? defaultValue : localStorage.getItem(key);
  }

  public static remove(key: string): void {
    return localStorage.removeItem(key);
  }
}
