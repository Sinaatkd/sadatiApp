import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthChartPageRoutingModule } from './health-chart-routing.module';

import { HealthChartPage } from './health-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthChartPageRoutingModule
  ],
  declarations: [HealthChartPage]
})
export class HealthChartPageModule {}
