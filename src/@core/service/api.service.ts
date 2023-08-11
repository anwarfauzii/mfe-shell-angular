import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
    //
  }

  private formatErrors(error: any) {
    return throwError(error);
  }

  bulkDelete<T, D>(path: string, body: D): Observable<any> {
    return this.http
      .request<T>('delete', `${path}`, {
        body: JSON.stringify(body),
        headers: this.headers,
      })
      .pipe(catchError(this.formatErrors));
  }

  delete<T>(path: string): Observable<any> {
    return this.http
      .delete<T>(`${path}`, { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  downloadFile(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return new HttpHeaders(headersConfig);
  }

  get headersSocket(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Connection: 'Upgrade',
      Upgrade: 'WebSocket',
      Accept: 'application/json',
    };
    return new HttpHeaders(headersConfig);
  }

  get<T>(path: string, query?: any): Observable<any> {
    let urlAdd = '';

    if (query) {
      for (const key in query) {
        if (key) {
          urlAdd += `&${key}=${query[key]}`;
        }
      }
    }

    if (urlAdd) {
      path += urlAdd.replace('&', '?');
    }

    return this.http
      .get<T>(`${path}`, { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  getById<T>(path: string): Observable<any> {
    return this.http
      .get<T>(`${path}`, { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  getPagination<T>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get<T>(`${path}`, { headers: this.headers, params })
      .pipe(catchError(this.formatErrors));
  }

  post<T, D>(path: string, body: D): Observable<any> {
    return this.http
      .post<T>(`${path}`, JSON.stringify(body), { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  put<T, D>(path: string, body: D): Observable<any> {
    return this.http
      .put<T>(`${path}`, JSON.stringify(body), { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  patch<T, D>(path: string, body: D): Observable<any> {
    return this.http
      .patch<T>(`${path}`, JSON.stringify(body), { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  patchWithQuery<T, D>(path: string, query?: any, body?: D): Observable<any> {
    let urlAdd = '';

    if (query) {
      for (const key in query) {
        if (key) {
          urlAdd += `&${key}=${query[key]}`;
        }
      }
    }

    if (urlAdd) {
      path += urlAdd.replace('&', '?');
    }
    return this.http
      .patch<T>(`${path}`, JSON.stringify(body), { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  patchOption<T>(path: string): Observable<any> {
    return this.http
      .patch<T>(`${path}`, { headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  postSocket<T, D>(path: string, body: D): Observable<any> {
    return this.http
      .post<T>(`${path}`, JSON.stringify(body), { headers: this.headersSocket })
      .pipe(catchError(this.formatErrors));
  }
}
