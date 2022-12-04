import { EnvironmentInjector, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { Book } from './models/book';

import { environment } from "../../src/environments/environment";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookService {

  private server = environment.apiUrl + "/api/v1/books";

  constructor(private http: HttpClient) {
   
  }


  getBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(this.server+"/allBooks").pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<any> {

    console.log(error);

    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error - ${error.error.message}`;

    } else {

      if (error.error.reason) {
        errorMessage = `${error.error.reason} - Error code ${error.status}`;
      } else {
        errorMessage = `An error occurred - Error code ${error.status}`;
      }
    }
    return of(errorMessage);

  }
}
