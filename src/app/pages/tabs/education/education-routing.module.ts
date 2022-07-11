import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationPage } from './education.page';

const routes: Routes = [
  {
    path: '',
    component: EducationPage
  },
  {
    path: 'treatment',
    loadChildren: () => import('./treatment/treatment.module').then( m => m.TreatmentPageModule)
  },
  {
    path: 'symptoms-of-dialysis',
    loadChildren: () => import('./symptoms-of-dialysis/symptoms-of-dialysis.module').then( m => m.SymptomsOfDialysisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPageRoutingModule {}
