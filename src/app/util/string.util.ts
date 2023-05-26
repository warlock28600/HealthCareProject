// import jwtDecode from "jwt-decode";

import * as moment from "jalali-moment";

export class StringUtil {

  // public static getString(translateService: TranslateService, key: string) {
  //   let result = {value: ''};
  //   translateService.get('' + key).subscribe((value) => {
  //     return result.value = value;
  //   });
  //   return result;
  // }

  public static getTermLessonScheduleAsString(TermLessonSchedule: any): string {
    let temp = '';
    if (!TermLessonSchedule) {
      return '';
    }
    for (let j = 0; j < TermLessonSchedule.length; j++) {
      temp += '(' + this.getFormattedWeekNameByDayCode(TermLessonSchedule[j].DayCode) + ' - ' + TermLessonSchedule[j].StartTime + ' تا ' + TermLessonSchedule[j].EndTime + ' - ' + ' کلاس ' + TermLessonSchedule[j].ClassRoom.Title + ')';
    }
    return temp;
  }

  public static getProfessorLessonsTermLessonScheduleAsString(ProfessorLessons: any): string {
    let temp = '';
    if (!ProfessorLessons) {
      return '';
    }
    for (let j = 0; j < ProfessorLessons.length; j++) {
      temp += (ProfessorLessons[j]?.ProfessorUser?.ProfessorUser?.Person?.FirstName + ProfessorLessons[j]?.ProfessorUser?.ProfessorUser?.Person?.LastName) + ',';
    }
    temp = temp.substring(0, temp.length - 1);
    return temp;
  }

  public static getFormattedWeekNameByDayCode(DayCode: number): string {
    return 'شنبه';
  }

  public static reformatString(string?: string): string | undefined {
    if (!string) {
      return undefined;
    }
    let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    let arabicNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    for (let i = 0; i < 10; i++) {
      string = string!.replace(persianNumbers[i], '' + i).replace(arabicNumbers[i], '' + i);
    }
    string = string.replaceAll('ك', 'ک');
    string = string.replaceAll('ـك', 'ک');
    string = string.replaceAll('ـكـ', 'ک');
    string = string.replaceAll('كـ', 'ک');
    string = string.replaceAll('ي', 'ی');
    string = string.replaceAll('ـي', 'ی');
    string = string.replaceAll('ـيـ', 'ی');
    string = string.replaceAll('يـ', 'ی');
    string = string.replace(/\s+/g, ' ').trim();
    string = string.trim();
    return string;
  }

  public static isPhoneNumberValid(phoneNumberText: string): boolean {
    return (phoneNumberText.length === 10 && phoneNumberText.trim().startsWith('9') || phoneNumberText.length === 11 && phoneNumberText.trim().startsWith('0') || phoneNumberText.length == 13 && phoneNumberText.trim().startsWith('+989'));
  }

  public static refactorPhoneNumber(phoneNumber: string): string {
    let result: string = phoneNumber.trim();
    if (phoneNumber.charAt(0) === '0') {
      result = phoneNumber.substring(1);
    } else if (phoneNumber.startsWith('+989')) {
      result = phoneNumber.substring(3);
    }
    result = "0" + result;
    return result;
  }

  public static isEmailValid(email: string): boolean {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return email.match(regexp) != null;
  }

  // public static decodedToken(token: string): any | null {
  //   if (token.split('.').length === 3) {
  //     return jwtDecode(token);
  //   }
  //   return null;
  // }

  public static integerAsCurrency(integer?: number): string {
    if (!integer && integer !== 0) {
      return '';
    }
    let isNegative = (integer < 0);
    integer = Math.abs(integer);
    integer = Math.round(integer);
    let result: string = '';
    while (integer != 0) {
      let temp = '' + (integer % 1000);
      if (temp.length === 1) {
        temp = '00' + temp;
      } else if (temp.length === 2) {
        temp = '0' + temp;
      }
      result = temp + ',' + result;
      integer = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(integer / 1000);
    }
    if (result.length > 0) {
      result = result.substring(0, result.length - 1);
      if (((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(result, '00')) {
        result = result.substring(2);
      } else if (((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(result, '0')) {
        result = result.substring(1);
      }
    }
    if (result === ('')) {
      result = '0';
    }
    return isNegative ? ('-' + result) : result;
  }

  public static convertToDate(format: string, date?: string): string {
    return moment.from(date!, 'fa', format).format(format);
  }
}
