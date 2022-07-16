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
  
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onClick() {
    this.modalCtrl.dismiss();
  }

  zoomIn() {
    this.zoomTo = this.zoomTo + 0.10;
  }

  zoomOut() {
    if (this.zoomTo > 1) {
       this.zoomTo = this.zoomTo - 0.10;
    }
  }

  callBackFn(event) {
    this.isLoading = false;
  }
}
