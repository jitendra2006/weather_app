import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  
  def=true;
  lat:any
  long:any
  data:any
  savedCity:any;
  add:any= false;
  @Input() name:any="";
  @Input() choice:any
  constructor(private service:WeatherService) { }
  ngOnInit(): void {
    this.getCurrentLocation();
    console.log("ngoninit")
    this.savedCity = JSON.parse(String(localStorage.getItem('cities')))
    console.log(this.savedCity);
  }


  log(f:any){
    this.def=false;
  console.log(f.value.fname)
   this.service.getCurrentWeatherReport(f.value.fname)
    .subscribe(data=>{
      console.log(data)
      this.data = data;
    })
  }
  

    searchFrom(){
      this.def = false;
        console.log(this.choice);
        this.name = this.choice;
        return this.service.getCurrentWeatherReport(this.name)
        .subscribe(data=>{
          console.log(data)
          this.data = data
        })
    }

    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
  
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;

          this.service.getWeatherbyLocation(this.lat,this.long).
          subscribe(param=>{
            console.log(param);
            this.data = param

          })
        });
      }
      else {
        alert("Geolocation is not supported by this browser.");
      }
    }
  


  }

  


