import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Content } from './content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentURL = 'http://localhost:8080/api/content';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  // get all content 
  getContent(): Observable<Content[]> {
    return this.http.get<any>(this.contentURL)
      .pipe(
        map(response => response.products), 
        tap(_ => this.log('fetched products')),
        catchError(this.handleError<Content[]>('getProducts', []))
      );
  }



  
  private log(message: string): void {
    console.log(message);
  }


  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }





}
