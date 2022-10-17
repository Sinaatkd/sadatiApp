import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import {
  AlertController,
  ToastController,
  ModalController,
  LoadingController,
} from '@ionic/angular';
import { File } from '@awesome-cordova-plugins/file/ngx';

@Component({
  selector: 'app-symptoms-of-dialysis',
  templateUrl: './symptoms-of-dialysis.page.html',
  styleUrls: ['./symptoms-of-dialysis.page.scss'],
})
export class SymptomsOfDialysisPage implements OnInit {
  isSelectionQuestion = false;

  selectedQuestions = [];

  questions = [
    {
      id: 1,
      title: 'یبوست',
      filename: 'یبوست.pdf',
    },
    {
      id: 2,
      title: 'تهوع',
      filename: 'تهوع و استفراغ.pdf',
    },
    {
      id: 3,
      title: 'استفراغ',
      filename: 'تهوع و استفراغ.pdf',
    },
    {
      id: 4,
      title: 'اسهال',
      filename: 'اسهال.pdf',
    },
    {
      id: 5,
      title: 'کاهش اشتها',
      filename: 'کاهش اشتها.pdf',
    },
    {
      id: 6,
      title: 'گرفتگی عضلانی',
      filename: 'گرفتگی عضلات.pdf',
    },
    {
      id: 7,
      title: 'تورم پاها',
      filename: 'تورم پاها.pdf',
    },
    {
      id: 8,
      title: 'تنگی نفس',
      filename: 'تنگی نفس.pdf',
    },
    {
      id: 9,
      title: 'سرگیجه',
      filename: 'سرگیجه.pdf',
    },
    {
      id: 10,
      title: 'تکان دادن پاها و مشکل بیحرکت نگهداشتن پاها',
      filename: 'تکان دادن پاها و مشکل در بی حرکت نگه داشتن پاها.pdf',
    },
    {
      id: 11,
      title: 'بی حسی یا سوزش پاها',
      filename: 'بی حسی یا سوزش پاها.pdf',
    },
    {
      id: 12,
      title: 'سرفه',
      filename: 'سرفه.pdf',
    },
    {
      id: 13,
      title: 'خشکی دهان',
      filename: 'خشکی دهان.pdf',
    },
    {
      id: 14,
      title: 'درد استخوان یا مفصل',
      filename: 'درد مفصل و استخوان.pdf',
    },
    {
      id: 15,
      title: 'درد قفسه سینه',
      filename: 'درد قفسه سینه.pdf',
    },
    {
      id: 16,
      title: 'سردرد',
      filename: 'سردرد.pdf',
    },
    {
      id: 17,
      title: 'سبکی سر',
      filename: 'سبکی سر.pdf',
    },
    {
      id: 19,
      title: 'اختلال در تمرکز',
      filename: 'اختلال در تمرکز.pdf',
    },
    {
      id: 20,
      title: 'خشکی پوست',
      filename: 'خشکی پوست.pdf',
    },
    {
      id: 21,
      title: 'خارش',
      filename: 'خارش پوست.pdf',
    },
    {
      id: 22,
      title: 'نگرانی',
      filename: 'نگرانی.pdf',
    },
    {
      id: 23,
      title: 'احساس عصبانیت',
      filename: 'احساس عصبانیت.pdf',
    },
    {
      id: 24,
      title: 'اختلال در شروع خواب',
      filename: 'اختلال درشروع خواب و کم خوابی.pdf',
    },
    {
      id: 25,
      title: 'کم خوابی',
      filename: 'اختلال درشروع خواب و کم خوابی.pdf',
    },
    {
      id: 26,
      title: 'تحریک پذیری و بی حوصلگی',
      filename: 'تحریک پذیری و بی حوصلگی.pdf',
    },
    {
      id: 27,
      title: 'احساس غمگینی',
      filename: 'احساس غمگینی.pdf',
    },
    {
      id: 28,
      title: 'احساس اضطراب',
      filename: 'حس اضطراب.pdf',
    },
    {
      id: 29,
      title: 'کاهش میل جنسی',
      filename: 'کاهش میل جنسی و اختلال در تحریک جنسی.pdf',
    },
    {
      id: 30,
      title: 'اختلال در تحریک جنسی',
      filename: 'کاهش میل جنسی و اختلال در تحریک جنسی.pdf',
    },
  ];

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private file: File,
    private fileOpener: FileOpener,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    Storage.get({ key: 'selectedQuestions' }).then((res) => {
      if (res.value && JSON.parse(res.value).length > 0) {
        this.isSelectionQuestion = true;
        this.selectedQuestions = JSON.parse(res.value);
      }
    });
  }

  onChangeQuestion(event, questionId) {
    const question = this.questions.find(
      (question) => question.id === questionId
    );
    if (event.detail.checked) {
      this.selectedQuestions.push(question);
    } else {
      this.selectedQuestions = this.selectedQuestions.filter(
        (question) => question.id !== questionId
      );
    }
  }
  onClearData() {
    Storage.remove({ key: 'selectedQuestions' }).then(() => {
      this.isSelectionQuestion = false;
      this.selectedQuestions = [];
    });
  }

  onSave() {
    this.alertCtrl
      .create({
        message: 'آیا از ذخیره کردن اطلاعات اطمینان دارید؟',
        mode: 'ios',
        buttons: [
          {
            text: 'بله',
            handler: () => {
              Storage.set({
                key: 'selectedQuestions',
                value: JSON.stringify(this.selectedQuestions),
              }).then(() => {
                this.isSelectionQuestion = true;
                this.toastCtrl
                  .create({
                    message: 'اطلاعات با موفقیت ذخیره شد',
                    mode: 'ios',
                    duration: 2000,
                    color: 'success',
                  })
                  .then((toastEl) => toastEl.present());
              });
            },
          },
          {
            text: 'خیر',
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  showPdf(title, filename) {
    this.loadingCtrl.create({
      message: 'لطفا صبر کنید.'
    }).then(loadingEl => {
      loadingEl.present();
      const filePath = this.file.applicationDirectory + 'public/assets/symptoms-of-dialysis/pdf';
      this.file
      .copyFile(filePath, filename, this.file.dataDirectory, filename)
      .then( result => {
        loadingEl.dismiss();
        this.fileOpener.open(result.nativeURL, 'application/pdf');
      }, error => {
        loadingEl.dismiss();
        this.toastCtrl.create({
          message: 'باز کردن فایل با مشکل مواجه شد.',
          color:'danger',
          duration: 2000,
        }).then(toastEl => toastEl.present());
      });
    })
  }
}
