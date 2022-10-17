import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-pdf',
  templateUrl: './show-pdf.component.html',
  styleUrls: ['./show-pdf.component.scss'],
})
export class ShowPdfComponent implements OnInit {
  @Input('title') title: string;
  @Input('filename') filename: string;
  zoomTo = 1;
  isLoading = true;
  
  zoomProperties = {
    "double-tap": true, // double tap to zoom in and out.
    "backgroundColor": "rgba(0,0,0,0)", // Makes the pinch zoom container color to transparent. So that ionic themes can be applied without issues.
  }
  
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onClick() {
    this.modalCtrl.dismiss();
  }
  
  callBackFn(event) {
    this.isLoading = false;
  }
}
