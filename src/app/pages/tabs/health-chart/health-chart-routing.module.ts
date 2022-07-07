import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthChartPage } from './health-chart.page';

const routes: Routes = [
  {
    path: '',
    component: HealthChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthChartPageRoutingModule {}
