import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { catchError, of, retry } from 'rxjs';

import { MY_FORMATS } from '../../../../constantes';
import { ContasService } from '../services/contas.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-contas-cadastro',
  templateUrl: './contas-cadastro.component.html',
  styleUrls: ['./contas-cadastro.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ContasCadastroComponent implements OnInit {

  public contaForm: FormGroup;

  constructor(
    private service: ContasService,
    public dialogContaForm: MatDialogRef<ContasCadastroComponent>,
    public dialogErro: MatDialog     
  ) {
    this.contaForm = new FormGroup({
      nome: new FormControl ('', [Validators.required]),
      dataVencimento: new FormControl ('', [Validators.required]),
      dataPagamento: new FormControl ('', [Validators.required]),
      valorOriginal: new FormControl ('', [Validators.required])
    });

  }
  
  ngOnInit(): void {}

  fechar(): void {
    this.contaForm.reset();
    this.dialogContaForm.close(true);
    //this.contaForm.reset();
    //window.location.reload();
  }

  salvar(): void {

    console.log(this.contaForm.value);
    this.service.salvar(this.contaForm.value)
      .pipe(
        catchError(error => {
          console.log(error)
          this.onError('Erro ao salvar conta.')
          return of([])
        })
      );
    
    this.fechar();
  }


  onError(erroMessage: string) {
    this.dialogErro.open(ErrorDialogComponent, {
      data: erroMessage
    });
  }


}
