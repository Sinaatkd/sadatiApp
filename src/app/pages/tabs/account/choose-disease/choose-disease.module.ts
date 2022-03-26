import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseDiseasePageRoutingModule } from './choose-disease-routing.module';

import { ChooseDiseasePage } from './choose-disease.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseDiseasePageRoutingModule
  ],
  declarations: [ChooseDiseasePage]
})
export class ChooseDiseasePageModule {}
