import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas/contas.component';



@NgModule({
  declarations: [
    ContasComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    AppMaterialModule,
    SharedModule    
  ]
})
export class ContasModule { }
