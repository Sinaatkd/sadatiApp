import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomsOfDialysisPage } from './symptoms-of-dialysis.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomsOfDialysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomsOfDialysisPageRoutingModule {}
