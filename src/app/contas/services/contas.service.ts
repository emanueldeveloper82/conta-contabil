import { Injectable } from '@angular/core';

import { Contas } from '../model/contas';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor() { }
  list(): Contas[] {
    return[
      {_id: '1', nome: 'Conta001', dataVencimento: '25/01/2022', dataPagamento: '29/01/2022', valorOriginal: 'R$100,00', valorCorrigido:'R$121,01', qtdDiasAtraso: '4' }
    ]
  }

}
