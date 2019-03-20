import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const apiUrl =
  'https://ptefyqkqw5.execute-api.sa-east-1.amazonaws.com/dev/books';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

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
    return this.http.get(apiUrl, { headers: headers }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getBook(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, { headers: headers }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  postBook(data: any): Observable<any> {
    return this.http
      .post(apiUrl, data, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  updateBook(id: number, data: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .put(url, data, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  deleteBook(id: number): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .delete(url, { headers: headers })
      .pipe(catchError(this.handleError));
  }
}
