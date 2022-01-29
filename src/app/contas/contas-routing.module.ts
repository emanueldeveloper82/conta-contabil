import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContasListarComponent } from './contas-listar/contas-listar.component';
import { ContasCadastroComponent } from './contas-cadastro/contas-cadastro.component';

const routes: Routes = [
  { path: '', component: ContasListarComponent },
  { path: '', component: ContasCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
