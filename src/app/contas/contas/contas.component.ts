import { Component, OnInit } from '@angular/core';
import { Contas } from '../model/contas';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {

  contas: Contas[] = [
    {_id: '1', nome: 'Conta001', dataVencimento: '25/01/2022', dataPagamento: '29/01/2022', valorOriginal: 'R$100,00', valorCorrigido:'R$121,01', qtdDiasAtraso: '4' }
  ];
  displayedColumns = ['nome', 'dataVencimento', 'dataPagamento', 'valorOriginal', 'valorCorrigido', 'qtdDiasAtraso' ];

 
  constructor() {
      //this.contas = [];
  }

  ngOnInit(): void {}

}
