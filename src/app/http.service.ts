import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveTasks(city) {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=0b06c0ee98969574f9f671e32e66fdbd")
    .map(data=>data.json()).toPromise()
    .catch(error => Observable.throw(error));
  }
}
  