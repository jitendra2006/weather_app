import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  add=false;
  savedCity:any;
  constructor(private service:WeatherService) { }

  ngOnInit(): void {
    this.savedCity = JSON.parse(String(localStorage.getItem('cities')))
  }

  addCity(){
    this.add=true;
  }
  
  save(name:any){
    console.log(name.value);
    console.log(typeof name.value);
    this.service.saveCity(name.value)
  }

  // delete city
  deleteCity(city:any){
    console.log(city)
    this.service.deleteCity(city);
  }


}
