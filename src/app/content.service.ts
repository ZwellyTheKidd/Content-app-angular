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
        map(response => response), 
        tap(_ => this.log('fetched Contents')),
        catchError(this.handleError<Content[]>('getContent', []))
      );
  }

  // add new content
  addContent(content: Content): Observable<Content> {
 // Omit the 'id' property from the content object
 const { id, ...contentWithoutId } = content;

 return this.http.post<Content>(this.contentURL, contentWithoutId, this.httpOptions).pipe(
   tap((newContent: Content) => this.log(`added content`)),
   catchError(this.handleError<Content>('addContent'))
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
