import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs';

import { Contas } from '../model/contas';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  private readonly API = 'assets/contas.json';

  constructor(private httpClient: HttpClient) { }
  list() {
      return this.httpClient.get<Contas[]>(this.API)
              .pipe(
                delay(1000),
                first(),
                take(1),
                tap(contas => console.log(contas))
              );
  }

}
