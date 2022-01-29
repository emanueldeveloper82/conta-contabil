import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ContasRoutingModule } from './contas-routing.module';
import { ContasListarComponent } from './contas-listar/contas-listar.component';
import { ContasCadastroComponent } from './contas-cadastro/contas-cadastro.component';



@NgModule({
  declarations: [
    ContasListarComponent,
    ContasCadastroComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    AppMaterialModule,
    SharedModule    
  ]
})
export class ContasModule { }
