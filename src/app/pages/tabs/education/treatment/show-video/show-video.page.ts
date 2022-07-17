import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.page.html',
  styleUrls: ['./show-video.page.scss'],
})
export class ShowVideoPage implements OnInit {

  videoAdress;
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.videoAdress = params.videoAdress;
      
    })
  }

}
