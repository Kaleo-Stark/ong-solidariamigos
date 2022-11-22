import { Component, OnInit } from '@angular/core';
import { FotoService } from '../../interfaces/foto.service';

@Component({
  selector: 'app-padrinho-nota-dez',
  templateUrl: './padrinho-nota-dez.component.html',
  styleUrls: ['./padrinho-nota-dez.component.css']
})
export class PadrinhoNotaDezComponent implements OnInit {

  private caminhoDasImagens : String = '../assets/padrinho-nota-dez';
  
  public imagensCarousel : Array<FotoService> = [
    {
      src: `${this.caminhoDasImagens}/foto-1.webp`,
      titulo: 'First slide label',
      sobre: 'Some representative placeholder content for the first slide.',
      ativo: true
    },
    {
      src: `${this.caminhoDasImagens}/foto-2.webp`,
      titulo: 'Second slide label',
      sobre: 'Some representative placeholder content for the second slide.',
      ativo: false
    },
    {
      src: `${this.caminhoDasImagens}/foto-3.webp`,
      titulo: 'Third slide label',
      sobre: 'Some representative placeholder content for the third slide.',
      ativo: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
