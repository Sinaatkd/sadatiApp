import { Storage } from '@capacitor/storage';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-choose-disease',
  templateUrl: './choose-disease.page.html',
  styleUrls: ['./choose-disease.page.scss'],
})
export class ChooseDiseasePage implements OnInit {

  selectedDiseases = []

  diseases = [
    {
      title: 'بیماری های قلبی',
      checked: false
    },
    {
      title: 'دیابت',
      checked: false
    },
    {
      title: 'فشار خون',
      checked: false
    },
    {
      title: 'سایر',
      checked: false
    },
  ]

  constructor(
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.checkSlecetedDiseases();
  }

  onSelectDisease(disease: string, event: any) {
    if (event.detail.checked) {

      this.selectedDiseases.push({ title: disease, checked: true })
    } else {
      this.selectedDiseases = this.selectedDiseases.filter(d => d.title !== disease)
    }
  }

  onSaveDiseases() {
    Storage.set({ key: 'diseases', value: JSON.stringify(this.selectedDiseases) }).then(() => {
      this.toastCtrl.create({ message: 'با موفقیت ذخیره شد', duration: 1500, color: 'success' }).then(toastEl => toastEl.present());
    })
  }

  checkSlecetedDiseases() {
    Storage.get({ key: 'diseases' }).then(value => {
      this.selectedDiseases = JSON.parse(value.value);
      for (let disease of this.diseases) {
        if (!(this.selectedDiseases && this.selectedDiseases.length > 0)) {
          this.selectedDiseases = [];
          return
        }
        if (this.selectedDiseases.filter(d => d.title === disease.title).length > 0) {
          disease.checked = true
        }
      }
    })
  }

}
