import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs';

import { Contas } from '../model/contas';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  private readonly API = 'http://localhost:8095/api/conta/listar';

  constructor(private httpClient: HttpClient) { }
  list() {
      return this.httpClient.get<Contas[]>(this.API)
              .pipe(
                first(),
                take(1),
                tap(contas => console.log(contas))
              );
  }

}
