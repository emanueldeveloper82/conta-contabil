import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { ContasCadastroComponent } from '../contas-cadastro/contas-cadastro.component';
import { Conta } from '../model/Conta';
import { ContasService } from '../services/contas.service';

@Component({
  selector: 'app-contas-listar',
  templateUrl: './contas-listar.component.html',
  styleUrls: ['./contas-listar.component.scss']
})
export class ContasListarComponent implements OnInit {

  contas$: Observable <Conta[]>;
  displayedColumns = ['nome', 'dataVencimento', 'dataPagamento', 'valorOriginal', 'valorCorrigido', 'qtdDiasAtraso', 'acoes' ];
 
  constructor(private service: ContasService, 
    public dialog: MatDialog ) {
    this.contas$ = this.service.listar().pipe(
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

  openDialogNovaConta(): void {
    const dialogRef = this.dialog.open(ContasCadastroComponent, {disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
