import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formGroupControls:FormGroup;
  constructor(protected ms:MainService) {
    this.formGroupControls = ms.info;
  }
}
