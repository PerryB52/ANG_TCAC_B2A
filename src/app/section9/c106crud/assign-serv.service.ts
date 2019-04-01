import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AssignServService extends DataService {

  //adding private will define http as class field
  constructor (http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
