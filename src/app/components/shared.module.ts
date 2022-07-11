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
  ],
  declarations: [
    ShowPdfComponent
  ],
  exports: [
    ShowPdfComponent
  ]
})
export class SharedModule {}
