import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveTasks(city) {
    return this._http.get("http://samples.openweathermap.org/data/2.5/weather?q="+ city +"&appid=b6907d289e10d714a6e88b30761fae22")
    .map(data=>data.json()).toPromise()
  }
}
  