import { Component, OnInit } from '@angular/core';
import { Contas } from '../model/contas';
import { ContasService } from '../services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {

  contas: Contas[] = [];
  displayedColumns = ['nome', 'dataVencimento', 'dataPagamento', 'valorOriginal', 'valorCorrigido', 'qtdDiasAtraso' ];
  service: ContasService;
 
  constructor() {
    this.service = new ContasService();
    this.contas = this.service.list();
  }

  ngOnInit(): void {}

}
