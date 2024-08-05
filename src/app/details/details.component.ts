import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  datas:any;
  constructor(protected ms:MainService) {
    ms.datas.subscribe(obj=>this.datas = obj);
    ms.getData();
  }
}
