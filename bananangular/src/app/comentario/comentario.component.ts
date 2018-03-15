import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
    
  comentariosrealizados:[any];
  
  constructor() { 
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
  
  añadeComentario(comentario: string) {
    if (comentario) {
      this.comentariosrealizados.push(comentario);
    }
  }
  
  ngOnInit() {
  }

}