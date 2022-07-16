import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user = null;
  constructor() {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    Storage.get({ key: 'userData' }).then(({ value }) => {
      const userData = JSON.parse(value);
      if (userData && userData.age && userData.firstName && userData.lastName) {
        Storage.get({ key: 'diseases' }).then(({ value }) => {
          const userDiseases = JSON.parse(value)
          if (userDiseases) {
            this.user = {
              fullname: `${userData.firstName} ${userData.lastName}`,
              age: userData.age,
              diseases: userDiseases 
            }
          }
        });
      }
    });
  }
}
