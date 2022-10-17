import { NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.page.html',
  styleUrls: ['./edit-report.page.scss'],
})
export class EditReportPage implements OnInit {
  reports: any[];
  lastReport;
  reportForm: FormGroup;

  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getLastReport();
  }

  getLastReport() {
    Storage.get({ key: 'reports' }).then(({ value }) => {
      const data = JSON.parse(value);
      this.reports = data;
      this.lastReport = data[data.length - 1];
      this.reportForm = new FormGroup({
        dryWeight: new FormControl(this.lastReport.dryWeight, {
          validators: Validators.required,
        }),
        weightBeforeDialysisSession: new FormControl(
          this.lastReport.weightBeforeDialysisSession,
          { validators: Validators.required }
        ),
        amountOfFluidReceived: new FormControl(
          this.lastReport.amountOfFluidReceived,
          { validators: Validators.required }
        ),
        Bun: new FormControl(this.lastReport.Bun, {
          validators: Validators.required,
        }),
        Cr: new FormControl(this.lastReport.Cr, {
          validators: Validators.required,
        }),
        Hb: new FormControl(this.lastReport.Hb, {
          validators: Validators.required,
        }),
        Hct: new FormControl(this.lastReport.Hct, {
          validators: Validators.required,
        }),
        Na: new FormControl(this.lastReport.Na, {
          validators: Validators.required,
        }),
        K: new FormControl(this.lastReport.K, {
          validators: Validators.required,
        }),
        Ca: new FormControl(this.lastReport.Ca, {
          validators: Validators.required,
        }),
        P: new FormControl(this.lastReport.P, {
          validators: Validators.required,
        }),
        Feritin: new FormControl(this.lastReport.Feritin, {
          validators: Validators.required,
        }),
        PTH: new FormControl(this.lastReport.PTH, {
          validators: Validators.required,
        }),
      });
    });
  }

  onSaveData() {
    const formData = this.reportForm.controls;
    const edited = {
      id: this.lastReport.id,
      dryWeight: formData.dryWeight.value,
      weightBeforeDialysisSession: formData.weightBeforeDialysisSession.value,
      amountOfFluidReceived: formData.amountOfFluidReceived.value,
      Bun: formData.Bun.value,
      Cr: formData.Cr.value,
      Hb: formData.Hb.value,
      Hct: formData.Hct.value,
      Na: formData.Na.value,
      K: formData.K.value,
      Ca: formData.Ca.value,
      P: formData.P.value,
      Feritin: formData.Feritin.value,
      PTH: formData.PTH.value,
      date: new Date().toLocaleDateString('fa-IR'),
    };
    const index = this.reports.findIndex((r) => r.id === edited.id);
    this.reports[index] = edited;
    Storage.set({ key: 'reports', value: JSON.stringify(this.reports) }).then(
      () => {
        this.toastCtrl
          .create({
            message: 'تغییرات با موفقیت اعمال شد',
            duration: 2000,
            color: 'success',
          })
          .then((toastEl) => {
            toastEl.present();
            this.navCtrl.navigateBack('/tabs/account');
          });
      }
    );
  }
}
