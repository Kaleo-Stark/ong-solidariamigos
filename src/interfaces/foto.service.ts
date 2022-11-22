import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  constructor(
    public src: String, 
    public titulo: String, 
    public sobre: String,
    public ativo: Boolean
  ) { }
}
