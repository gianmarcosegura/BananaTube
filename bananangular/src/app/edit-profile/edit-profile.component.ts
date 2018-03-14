import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

    fuente:string;
  constructor() { 
    this.fuente="assets/img/avatar5.png";
  }

  ngOnInit() {
  }
  showAvatar (elemento){
    console.log("Estoy cambiando el avatar");
      console.log(elemento.src);
    var newAvatar = elemento.src;
    
      this.fuente=newAvatar;
    
  }

}
