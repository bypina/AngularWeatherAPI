import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  user;
  temp;
  high;
  low;
  humidity;
  wind;
  clouds;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.user = this._httpService.retrieveTasks()
    .then( user => {
      console.log(user)
      this.high = user[0].email;
      console.log(this.high)
    }); 
  }
}
