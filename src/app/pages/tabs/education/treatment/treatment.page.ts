import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.page.html',
  styleUrls: ['./treatment.page.scss'],
})
export class TreatmentPage implements OnInit {
  currentPlayingVideo: HTMLVideoElement;
  playingSessionId = null;
  sessions = [
    {
      id: 1,
      title: 'جلسه ۱',
      videos: [
        {
          video: 'assets/treatment/1.m4v',
        },
      ],
    },
    {
      id: 2,
      title: 'جلسه ۲',
      videos: [
        {
          video: 'assets/treatment/2.m4v',
        },
        {
          video: 'assets/treatment/3.m4v',
        },
      ],
    },
    {
      id: 3,
      title: 'جلسه ۳',
      videos: [
        {
          video: 'assets/treatment/4.m4v',
        },
      ],
    },
    {
      id: 4,
      title: 'جلسه ۴',
      videos: [
        {
          video: 'assets/treatment/5.m4v',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  onPlayingVideo(event, sessionId) {
    this.playingSessionId = sessionId;
    event.preventDefault();
    // play the first video that is chosen by the user
    if (this.currentPlayingVideo === undefined) {
      this.currentPlayingVideo = event.target;
      this.currentPlayingVideo.play();
    } else {
      // if the user plays a new video, pause the last
      // one and play the new one
      if (event.target !== this.currentPlayingVideo) {
        this.currentPlayingVideo.pause();
        this.currentPlayingVideo = event.target;
        this.currentPlayingVideo.play();
      }
    }
  }

  onVideoPause(event) {
    this.playingSessionId = null;
  }
}
