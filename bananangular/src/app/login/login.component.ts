import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogeService } from './loge.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    logged:boolean;

  constructor() {
    this.logged=false;
  }

  ngOnInit() {
  }

}