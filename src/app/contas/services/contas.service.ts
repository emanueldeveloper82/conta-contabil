import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, take, tap } from 'rxjs';

import { Conta } from './../model/Conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  private readonly API_CONTA_LISTAR = 'api/conta/listar';
  private readonly API_CONTA_SALVAR = 'api/conta/salvar';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listar() {
      return this.httpClient.get<Conta[]>(this.API_CONTA_LISTAR)
              .pipe(
                // delay(500),
                first(),
                take(1),
                tap(contas => console.log(contas))
              );
  }

  salvar(conta: Conta): Observable<Conta> {
    return this.httpClient.post<any>(this.API_CONTA_SALVAR, conta, this.httpOptions);
    
    //env.baseApiUrl + this.PATH, lancamento, this.httpUtil.headers()
  }

}
