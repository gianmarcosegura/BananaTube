import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
    
  añadeComentario(comentario: string) {
    if (comentario) {
      comentariosrealizados.heroes.push(comentario);
    }
      
  constructor() { }

  ngOnInit() {
  }

}
