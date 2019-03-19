import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const apiUrl = 'https://places.demo.api.here.com/places/v1/categories/places?';
const at = '41.8369,-87.684';
const app_id = '6i8UJD2Jzh6osVBpUWvU';
const app_code = 'BOv0STjZJcFQke1elIBfvQ';

const headers = new HttpHeaders({ Accept: 'application/json' });
const params = new HttpParams()
  .set('at', at)
  .set('app_id', app_id)
  .set('app_code', app_code);

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getBooks(): Observable<any> {
    return this.http.get(apiUrl, { headers: headers, params: params }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  postBook(data): Observable<any> {
    const url = `${apiUrl}/add_book`;
    return this.http
      .post(url, data, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  updateBook(id: string, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .put(url, data, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  deleteBook(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .delete(url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }
}
