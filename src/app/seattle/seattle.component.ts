import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { Stats } from '../stats/stats'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  public stats = new Stats()
  
  
  constructor(private _httpService:HttpService) { }
  
    ngOnInit() {
      this.getWeather()     
  }
  
    getWeather(){
      let city = "seattle"    
    
      this._httpService.retrieveTasks(city)
      .then(data => {
        this.stats.tempHigh = data.main.temp_max
        this.stats.tempLow = data.main.temp_min
        this.stats.temp = data.main.temp 
        this.stats.weather = data.weather[0].main     
        console.log(this.stats)
      })
  }

}
