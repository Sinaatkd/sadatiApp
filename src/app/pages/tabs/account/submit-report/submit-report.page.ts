import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-submit-report',
  templateUrl: './submit-report.page.html',
  styleUrls: ['./submit-report.page.scss'],
})
export class SubmitReportPage implements OnInit {

  reportForm: FormGroup

  constructor(
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.reportForm = new FormGroup({
      dryWeight: new FormControl(0, { validators: Validators.required }),
      weightBeforeDialysisSession: new FormControl(0, { validators: Validators.required }),
      amountOfFluidReceived: new FormControl(0, { validators: Validators.required }),
      Bun: new FormControl(0, { validators: Validators.required }),
      Cr: new FormControl(0, { validators: Validators.required }),
      Hb: new FormControl(0, { validators: Validators.required }),
      Hct: new FormControl(0, { validators: Validators.required }),
      Na: new FormControl(0, { validators: Validators.required }),
      K: new FormControl(0, { validators: Validators.required }),
      Ca: new FormControl(0, { validators: Validators.required }),
      P: new FormControl(0, { validators: Validators.required }),
      Feritin: new FormControl(0, { validators: Validators.required }),
      PTH: new FormControl(0, { validators: Validators.required }),
    })
  }

  onSaveData() {
    const formData = this.reportForm.controls;
    let reports = [];
    Storage.get({ key: 'reports' }).then(res => {
      if (res.value === null || res.value === undefined) {
        const newReport = {
          id: 1,
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
        }
        reports.push(newReport)
        Storage.set({ key: 'reports', value: JSON.stringify(reports) }).then(_ => {
          this.toastCtrl.create({ color: 'success', message: 'گزارش جدید با موفقیت ثبت شد', mode: 'ios', duration: 1500 }).then(toastEl => toastEl.present());
        })
      } else {
        reports = JSON.parse(res.value);
        const lastId = reports[reports.length - 1].id
        const newReport = {
          id: lastId + 1,
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
        }
        reports.push(newReport)
        Storage.set({ key: 'reports', value: JSON.stringify(reports) }).then(_ => {
          this.toastCtrl.create({ color: 'success', message: 'گزارش جدید با موفقیت ثبت شد', mode: 'ios', duration: 1500 }).then(toastEl => toastEl.present());
        })
      }

      this.reportForm.reset();
    })
  }

}
