import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopoComponent } from '../componentes/topo/topo.component';
import { RodapeComponent } from '../componentes/rodape/rodape.component';

import { PadrinhoNotaDezComponent } from '../componentes/padrinho-nota-dez/padrinho-nota-dez.component';
import { BazarComponent } from '../componentes/bazar/bazar.component';
import { DoacaoComponent } from '../componentes/doacao/doacao.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    PadrinhoNotaDezComponent,
    BazarComponent,
    DoacaoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
