import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
    
  comentariosrealizados:[any];
    comentario:any;
  
  constructor() { 
    this.comentario={
        username:"Pepe",
        mensaje:""
    };
    this.comentariosrealizados=[
        {
            username:"Pepe",
            mensaje:"Me ha molado!!!"
        },
        {
            username:"Juan",
            mensaje:"Me ha molado mucho más que a ti fulano!!!"
        }
    ];
  }
  
  anadeComentario() { 
      console.log("añadecomentario");
    if (this.comentario.mensaje!="") {
      this.comentariosrealizados.push(this.comentario);
        this.comentario={
            username:"Pepe",
            mensaje:""
        };
    }
  }
  
  ngOnInit() {
  }

}