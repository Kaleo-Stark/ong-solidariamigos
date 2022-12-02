import { Component, OnInit } from '@angular/core';
import { FotoService } from '../../interfaces/foto.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  private caminhoDasImagens : String = '../assets/doacao';
  
  public imagensCarousel : Array<FotoService> = [
    {
      src: `${this.caminhoDasImagens}/imagem-1.png`,
      titulo: 'First slide label',
      sobre: 'Some representative placeholder content for the first slide.',
      ativo: true
    },
    {
      src: `${this.caminhoDasImagens}/imagem-2.png`,
      titulo: 'Second slide label',
      sobre: 'Some representative placeholder content for the second slide.',
      ativo: false
    },
    {
      src: `${this.caminhoDasImagens}/imagem-3.png`,
      titulo: 'Third slide label',
      sobre: 'Some representative placeholder content for the third slide.',
      ativo: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
