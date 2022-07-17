import { PinchZoomModule } from 'ngx-pinch-zoom';
import { ChartHelpComponent } from './chart-help/chart-help.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ShowPdfComponent } from './show-pdf/show-pdf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PdfViewerModule,
    PinchZoomModule,
  ],
  declarations: [
    ShowPdfComponent,
    ChartHelpComponent
  ],
  exports: [
    ShowPdfComponent,
    ChartHelpComponent
  ]
})
export class SharedModule {}
