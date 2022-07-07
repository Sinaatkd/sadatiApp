import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseDiseasePage } from './choose-disease.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseDiseasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseDiseasePageRoutingModule {}
