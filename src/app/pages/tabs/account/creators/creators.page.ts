import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.page.html',
  styleUrls: ['./creators.page.scss'],
})
export class CreatorsPage implements OnInit {

  creators = [    
    {
      fullname: 'بنیامین سعادتی فر'
    },
    {
      fullname: 'سیمین شریفی'
    },
    {
      fullname: 'نرجس خاتون صادقی گوغری'
    },
    {
      fullname: 'سینا امینی - سازنده اپلیکیشن',
      phoneNumber: '09212523085'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
