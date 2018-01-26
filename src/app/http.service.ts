import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveTasks() {
    return this._http.get("http://localhost:8000/users/?format=json")
    .map(data=>data.json()).toPromise()
  }
}
  