import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Dragon } from './dragon';
import { MessageService } from './message.service';
import { Dragons } from 'src/app/dragons';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  private dragonsApiUrl = 'https://dragons-api.herokuapp.com/api/dragons';

  getDragons(): Observable<Dragons> {
    return this.http.get<Dragons>(this.dragonsApiUrl + '?page=2&size=200').pipe(
      catchError(this.handleError('getDragons', new Dragons()))
    );
  }

  getDragon(dragon: Dragon | string): Observable<Dragon> {
    const slug = typeof dragon === 'string' ? dragon : dragon.slug;
    return this.http.get<Dragon>(this.dragonsApiUrl + '/' + slug).pipe(
      catchError(this.handleError('getDragon', new Dragon()))
    );
  }

  addDragon (dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>(this.dragonsApiUrl, dragon, httpOptions).pipe(
      catchError(this.handleError<Dragon>('addDragon'))
    );
  }

  deleteDragon (dragon: Dragon | string): Observable<Dragon> {
    const slug = typeof dragon === 'string' ? dragon : dragon.slug;
    const url = `${this.dragonsApiUrl}/${slug}`;

    return this.http.delete<Dragon>(url, httpOptions).pipe(
      catchError(this.handleError<Dragon>('deleteDragon'))
    );
  }

  updateDragon (dragon: Dragon): Observable<Dragon> {
    const url = `${this.dragonsApiUrl}/${dragon.slug}`;

    return this.http.put<Dragon>(url, dragon, httpOptions).pipe(
      catchError(this.handleError<Dragon>('deleteDragon'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`DragonService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
}
