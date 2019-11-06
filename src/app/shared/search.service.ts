import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface IGifs {
    data: Array<object>;
}
@Injectable({
  providedIn: 'root'
})

export class SearchService {
  uri = 'https://api.giphy.com/v1/gifs/search?api_key=GHFpzsjlNI0wExvxSVWefHY9k1mTthH2&q=';
  constructor(private http: HttpClient) { }

  getGifs(searchWord: string) {
    const apiUrl = `${this.uri}${searchWord}&limit=25&offset=0&rating=G&lang=en`;
    return this.http.get<IGifs>(apiUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
