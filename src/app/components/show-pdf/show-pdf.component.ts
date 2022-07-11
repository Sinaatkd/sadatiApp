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

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onClick() {
    this.modalCtrl.dismiss();
  }
}
