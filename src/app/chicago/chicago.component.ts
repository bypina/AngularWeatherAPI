import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  stats

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let city = "chicago"    
    this._httpService.retrieveTasks(city)
    .then(data => this.stats = data)
    .then( function(data){
      console.log(data,"RESPONSEEE")
    }); 
  }
}
