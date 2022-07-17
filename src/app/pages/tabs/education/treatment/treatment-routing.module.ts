import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreatmentPage } from './treatment.page';

const routes: Routes = [
  {
    path: '',
    component: TreatmentPage
  },
  {
    path: 'show-video/:videoAdress',
    loadChildren: () => import('./show-video/show-video.module').then( m => m.ShowVideoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatmentPageRoutingModule {}
