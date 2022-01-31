import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContasListarComponent } from './contas-listar/contas-listar.component';

const routes: Routes = [
  { path: '', component: ContasListarComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
