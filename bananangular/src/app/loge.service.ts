
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class LogeService {

  promesaDatos:any;
  url:string;
  private loginSource = new BehaviorSubject<boolean>(false);
  currentLogin = this.loginSource.asObservable();

  constructor(private http:HttpClient) {
    this.url="http://www.mocky.io/v2/5a54ae822d00005f235b1cd2";
    this.promesaDatos=this.http.get(this.url);
  }
  getData(): Observable<boolean>{
    return this.promesaDatos;
  }
  getLogged(){
      return this.currentLogin;
  }
  setLogged(login){
      this.loginSource.next(login)
  }

}
