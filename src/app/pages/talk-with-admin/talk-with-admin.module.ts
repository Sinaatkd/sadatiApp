import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalkWithAdminPageRoutingModule } from './talk-with-admin-routing.module';

import { TalkWithAdminPage } from './talk-with-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalkWithAdminPageRoutingModule
  ],
  declarations: [TalkWithAdminPage]
})
export class TalkWithAdminPageModule {}
