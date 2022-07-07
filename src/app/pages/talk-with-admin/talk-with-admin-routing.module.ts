import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalkWithAdminPage } from './talk-with-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TalkWithAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalkWithAdminPageRoutingModule {}
