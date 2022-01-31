import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { LocalDateTimePipe } from './pipes/local-date-time.pipe';
import { LocalDatePipe } from './pipes/local-date.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    LocalDateTimePipe,
    LocalDatePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent, 
    LocalDateTimePipe, 
    LocalDatePipe
  ]
})
export class SharedModule { }
