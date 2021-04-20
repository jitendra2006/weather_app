import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  data:any
  city:any
  savedCity:any;
  add:any= false;
  @Input() name:any="";
  @Input() choice:any
  constructor(private service:WeatherService) { }
  ngOnInit(): void {
    console.log("ngoninit")
    this.savedCity = JSON.parse(String(localStorage.getItem('cities')))
    console.log(this.savedCity);
  }


  log(f:any){
    this.city = f.value.fname
  console.log(f.value.fname)
   this.service.getWeatherForecastReport(f.value.fname)
    .subscribe(param=>{
      let tempArr =[];
      for(let i=0;i<param.list.length;i+=8)
      {
        tempArr.push(param.list[i]);
      }
      // console.log(tempArr);
      this.data = tempArr
      console.log(this.data)
      // console.log(param.cnt);
    })
  }
  

    searchFrom(){
      console.log("runnnnnnnnnnnned")
        console.log(this.choice);
        this.city = this.choice
        this.name = this.choice;
        return this.service.getWeatherForecastReport(this.name)
        .subscribe(param=>{
          let tempArr =[];
          for(let i=0;i<param.list.length;i+=8)
          {
            tempArr.push(param.list[i]);
          }
          // console.log(tempArr);
          this.data = tempArr
          console.log(this.data)
         
        })
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