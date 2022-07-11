import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsOfDialysisPageRoutingModule } from './symptoms-of-dialysis-routing.module';

import { SymptomsOfDialysisPage } from './symptoms-of-dialysis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsOfDialysisPageRoutingModule
  ],
  declarations: [SymptomsOfDialysisPage]
})
export class SymptomsOfDialysisPageModule {}
