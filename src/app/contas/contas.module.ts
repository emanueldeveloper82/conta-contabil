import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ContasCadastroComponent } from './contas-cadastro/contas-cadastro.component';
import { ContasListarComponent } from './contas-listar/contas-listar.component';
import { ContasRoutingModule } from './contas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContasListarComponent,
    ContasCadastroComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule    
  ]
})
export class ContasModule { }
