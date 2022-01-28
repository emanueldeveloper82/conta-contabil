import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas/contas.component';



@NgModule({
  declarations: [
    ContasComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class ContasModule { }
