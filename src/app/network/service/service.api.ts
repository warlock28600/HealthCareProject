import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceApi {

  constructor(private http: HttpClient) {
  }


  reformatQuery(queries: any[], useAndMark = false): string {
    let filledValues = queries.filter((query: any) => {
      return query.value && query.value !== undefined && query.value !== null;
    });
    let concatQueries = filledValues.map((query: any) => {
      return query.key + '=' + query.value;
    });
    if (concatQueries.length > 0) {
      return (useAndMark ? '&' : '?') + concatQueries.join('&');
    }
    return '';
  }

  public postSelect(microservice: string, version: string, controller: string, method: string, body?: any, offset?: any, limit?: any, requestType?: string): Observable<any> {
    return this.http.post(microservice + 'api/' + version + '/' + controller + '/' + method + this.reformatQuery([{
      key: 'offset',
      value: offset
    }, {
      key: 'limit',
      value: limit
    }, {
      key: 'RequestType',
      value: requestType
    }], method.includes('?')), body);
  }

  public getSelect(microservice: string, version: string, controller: string, method: string, query?: any, offset?: any, limit?: any): Observable<any> {
    return this.http.get(microservice + 'api/' + version + '/' + controller + '/' + method + this.reformatQuery([{
      key: 'offset',
      value: offset
    }, {
      key: 'limit',
      value: limit
    }], method.includes('?')));
  }
}
