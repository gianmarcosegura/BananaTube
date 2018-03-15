import { Component } from '@angular/core';
import {OnDestroy, OnInit} from '@angular/core';
import { LogeService } from './loge.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  promesaDatos:any;
  logged:Observable<boolean>;
  login:boolean;
  constructor(private miServicio: LogeService){
      this.logged=this.miServicio.getLogged();
      this.logged.subscribe(
        this.actualizaLogin.bind(this)
          )
      ;
  }
  actualizaLogin(datos){
      this.login=datos;
  }
  loguear(){
        //console.log("logueando");
        this.miServicio.setLogged(true);
        //this.logged=this.miServicio.getLogged();
  }
  desloguear(){
      //console.log("deslogueando");
        this.miServicio.setLogged(false);
        //this.logged=this.miServicio.getLogged();
  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }
}
