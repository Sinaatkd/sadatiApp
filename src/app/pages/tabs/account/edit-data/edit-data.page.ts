import { Storage } from '@capacitor/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.page.html',
  styleUrls: ['./edit-data.page.scss'],
})
export class EditDataPage implements OnInit {

  
  accountFormGroup: FormGroup;

  constructor(
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  
  ionViewDidEnter() {
    Storage.get({ key: 'userData' }).then(({ value }) => {
      let userData = JSON.parse(value);
      userData = this.checkUserDataValue(userData)
      this.accountFormGroup = new FormGroup({
        firstName: new FormControl(userData.firstName, { validators: [Validators.required] }),
        lastName: new FormControl(userData.lastName, { validators: [Validators.required] }),
        phoneNumber: new FormControl(userData.phoneNumber, { validators: [Validators.required] }),
        age: new FormControl(userData.age, { validators: [Validators.required] }),
        healthStatus: new FormControl(userData.healthStatus, { validators: [Validators.required] }),
        gender: new FormControl(userData.gender, { validators: [Validators.required] }),
        marital: new FormControl(userData.marital, { validators: [Validators.required] }),
        job: new FormControl(userData.job, { validators: [Validators.required] }),
        nationality: new FormControl(userData.nationality, { validators: [Validators.required] }),
        familyCount: new FormControl(userData.familyCount, { validators: [Validators.required] }),
        liveWith: new FormControl(userData.liveWith, { validators: [Validators.required] }),
        education: new FormControl(userData.education, { validators: [Validators.required] })
      });
    })
  }

  onSaveData() {

    const formData = this.accountFormGroup.controls;
    const userPhoneNumber = formData.phoneNumber.value.toString();
    
    const userData = {
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      phoneNumber: userPhoneNumber[0] === '0' ? userPhoneNumber : "0" + userPhoneNumber,
      age: formData.age.value,
      healthStatus: formData.healthStatus.value,
      gender: formData.gender.value,
      marital: formData.marital.value,
      job: formData.job.value,
      nationality: formData.nationality.value,
      familyCount: formData.familyCount.value,
      liveWith: formData.liveWith.value,
      education: formData.education.value,
    };

    Storage.set({ key: "userData", value: JSON.stringify(userData) }).then(() => {
      this.toastCtrl.create({ message: 'با موفقیت ذخیره شد', color: 'success', duration: 1500 }).then(toastEl => { toastEl.present() })
    })


  }

  checkUserDataValue(userData) {
    if (userData === null || userData === undefined) {
      return {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        age: null,
        healthStatus: null,
        gender: null,
        marital: null,
        job: null,
        nationality: null,
        familyCount: null,
        liveWith: null,
        education: null,
      }
    }
    return userData
  }
}
