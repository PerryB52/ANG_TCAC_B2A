import { Injectable } from '@angular/core';
//import { Http } from '../../../../node_modules/@angular/http';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {AppError} from './../app-error'
import {NotFoundError} from './../not-found-error'
import {BadInput} from '../bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //adding private will define http as class field
  constructor(private url: string, private http: Http) {}

   getAll(){
    return this.http.get(this.url)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError));
   }

   create(resource: any){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError));
   }

   update(resource: any){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError));
   }

   delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map(response => response.json()),  
        catchError(this.handleError));
  }

  
  private handleError(error: Response){
    if(error.status === 400)
      return throwError(new BadInput(error.json()));

    if (error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
