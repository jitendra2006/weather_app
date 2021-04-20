import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  // Get currentData
  getCurrentWeatherReport(cityName:String){
    console.log(cityName);
    let url = `http://api.weatherstack.com/current?access_key=e42a950359de64c35fd7e3ee97aa85ad&query=${cityName}`
    return this.http.get(url);
  }

  // Weather Forecast
  getWeatherForecastReport(cityName:any):Observable<any>{
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=55f1819a7019b27b0bac5a78879f204d`
    return this.http.get(url)
  }

// Get weather by geoloaction


getWeatherbyLocation(lat:any,lon:any):Observable<any>{
  return this.http.get<any>(`http://api.weatherstack.com/current?access_key=ec250e9fc6ae55dcc5bc47da56033b86&query=${lat},${lon}`)
} 


  // Save city in localStorage
  saveCity(ct:String){
    let cities:any[]
    if(localStorage.getItem('cities')){
    
    cities = JSON.parse(String(localStorage.getItem('cities')));
    for(let city of cities){
      console.log(typeof city)
      if(city == ct){
        return
      }
    }
    cities = [ct,...cities]
    }
    else
    {
      cities = [ct];
    }
    localStorage.setItem('cities', JSON.stringify(cities));
    }

    // Delete city from localstorage
    deleteCity(cityName:any){
      let cities = []
      let newcities=[]
      cities = JSON.parse(String(localStorage.getItem('cities')))
      console.log(cities)
      for(let city of cities){
        if(city!=cityName){
          newcities.push(city)
        }
      }
      localStorage.setItem('cities',JSON.stringify(newcities));

    }
}
