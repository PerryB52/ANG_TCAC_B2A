import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatIconModule,
  MatButtonModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule} from '@angular/material';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MdComponentsModule { }
