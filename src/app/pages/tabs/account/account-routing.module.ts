import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  },
  {
    path: 'edit-data',
    loadChildren: () => import('./edit-data/edit-data.module').then( m => m.EditDataPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'submit-report',
    loadChildren: () => import('./submit-report/submit-report.module').then( m => m.SubmitReportPageModule)
  },
  {
    path: 'choose-disease',
    loadChildren: () => import('./choose-disease/choose-disease.module').then( m => m.ChooseDiseasePageModule)
  },  {
    path: 'refrences',
    loadChildren: () => import('./refrences/refrences.module').then( m => m.RefrencesPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
