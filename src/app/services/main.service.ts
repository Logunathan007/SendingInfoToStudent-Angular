import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http:HttpClient){
    this.http = http;
  }
  datas:BehaviorSubject<any> = new BehaviorSubject([]);
  
  info: FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    fatherName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    phoneNumber : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required)
  })

  getData(){
    console.log("get data is worked")
    this.http.get("https://localhost:7005/api/Api").subscribe((obj:any) => {
      this.changeDatas(obj);
    });
  }

  postData(event: Event){
    event.preventDefault();
    console.log("post data is worked")
    console.log(this.info);
    this.http.post("https://localhost:7005/api/Api",this.info.value).subscribe((obj:any) => {
      this.info.setValue({name:"",fatherName:"",email:"",phoneNumber:"",city:""})
      this.getData();
    });
  }  
  
  changeDatas(datas:any){
    this.datas.next(datas);
  }
}
