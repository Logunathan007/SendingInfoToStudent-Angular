import { Component, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  constructor(private http:HttpClient){
    this.http = http;
  }
  //https://localhost:7005/WeatherForecast
  // {
  //   "date": "2024-08-07",
  //   "temperatureC": 12,
  //   "temperatureF": 53,
  //   "summary": "Chilly"
  // }
  datas:any = []; 

  info: FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    fatherName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    phoneNumber : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required)
  })

  getData(){
    console.log("get data is worked")
    this.http.get("https://localhost:7005/WeatherForecast").subscribe((obj:any) => {
      this.datas = obj;
      console.log("objject is ",obj);
    });
  }
  postData(event: Event){
    event.preventDefault();
    console.log("get data is worked")
    console.log(this.info);
    this.http.post("https://localhost:7005/WeatherForecast",this.info.value).subscribe((obj:any) => {
      console.log("objject is ",obj);
    });
  }  
}
