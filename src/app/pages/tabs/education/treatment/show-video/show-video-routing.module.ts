import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowVideoPage } from './show-video.page';

const routes: Routes = [
  {
    path: '',
    component: ShowVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowVideoPageRoutingModule {}
