import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Contas } from '../model/contas';
import { ContasService } from '../services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {

  contas$: Observable <Contas[]>;
  displayedColumns = ['nome', 'dataVencimento', 'dataPagamento', 'valorOriginal', 'valorCorrigido', 'qtdDiasAtraso' ];
 
  constructor(private service: ContasService, public dialog: MatDialog ) {
    this.contas$ = this.service.list().pipe(
      catchError(error => {
        console.log(error)
        this.onError('Erro ao carregar contas.')
        return of([])
      })
    );
  }

  onError(erroMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMessage
    });
  }

  ngOnInit(): void {}

}
