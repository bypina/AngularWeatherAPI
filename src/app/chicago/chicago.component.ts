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
  city = "Chicago"

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let city = "Chicago"    
    this.user = this._httpService.retrieveTasks(city)
    .then( user => {
      console.log(user)
      this.high = user[0].email;
      console.log(this.high)
    }); 
  }
}
