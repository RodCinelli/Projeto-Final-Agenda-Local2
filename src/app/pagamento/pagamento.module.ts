import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoPageRoutingModule } from './pagamento-routing.module';

import { PagamentoPage } from './pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoPageRoutingModule
  ],
  declarations: [PagamentoPage]
})
export class PagamentoPage {
  metodoPagamento: string;

  confirmarPagamento() {
      console.log('Método de pagamento escolhido:', this.metodoPagamento);
      // Aqui você pode adicionar a lógica para processar o pagamento
  }
}
