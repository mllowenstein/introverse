import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {}

  constructQueryString(params: HttpParams | {key: string, val: string;}[] | string): string {
    let qs = '';
    const kvpairs = Object.entries(params);
    kvpairs.forEach(([key, val], index) => {
      qs += index < index - 1 ? `${key}=${val}&` : `${key}=${val}`;
    });
    return qs;
  }

  get(
    url: string,
    params?: HttpParams | {key: string, val: string;}[] | string,
  ): Observable<any> | void {
    const querystring = params ? this.constructQueryString(params) : '';
    return this.http.get(`${url}?${querystring}`);
  }

  patch(
    url: string,
    payload: HttpParams | any,
    params?: HttpParams | {key: string, val: string;}[] | string,
  ): Observable<any> | void {
    const body = { payload };
    const querystring = params ? this.constructQueryString(params) : '';
    return this.http.patch(`${url}?${querystring}`, body);
  }

  put(
    url: string,
    payload: HttpParams | any,
    params?: HttpParams | {key: string, val: string;}[] | string,
  ): Observable<any> | void {
    const body = { payload };
    const querystring = params ? this.constructQueryString(params) : '';
    return this.http.put(`${url}?${querystring}`, body);
  }

  post(url: string, payload: HttpParams): Observable<any> | void {
    const body = { payload };
    return this.http.post(url, body).pipe(
      retry(3),
      throttleTime(300),
    );
  }

  delete(
    url: string,
    params?: HttpParams | {key: string, val: string;}[] | string,
  ): Observable<any> | void {
    const querystring = params ? this.constructQueryString(params) : '';
    return this.http.delete(`${url}?${querystring}`);
  }
}
