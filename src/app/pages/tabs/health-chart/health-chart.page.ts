import { ChartHelpComponent } from './../../../components/chart-help/chart-help.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@capacitor/storage';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-health-chart',
  templateUrl: './health-chart.page.html',
  styleUrls: ['./health-chart.page.scss'],
})
export class HealthChartPage implements OnInit {

  @ViewChild('BunCanvas') private BunCanvas: ElementRef;
  @ViewChild('CrCanvas') private CrCanvas: ElementRef;
  @ViewChild('HbCanvas') private HbCanvas: ElementRef;
  @ViewChild('HctCanvas') private HctCanvas: ElementRef;
  @ViewChild('NaCanvas') private NaCanvas: ElementRef;
  @ViewChild('KCanvas') private KCanvas: ElementRef;
  @ViewChild('CaCanvas') private CaCanvas: ElementRef;
  @ViewChild('PCanvas') private PCanvas: ElementRef;
  @ViewChild('FeritinCanvas') private FeritinCanvas: ElementRef;
  @ViewChild('PTHCanvas') private PTHCanvas: ElementRef;
  generalStatsChart: any;
  BunChart: any;
  CrChart: any;
  HbChart: any;
  HctChart: any;
  NaChart: any;
  KChart: any;
  CaChart: any;
  PChart: any;
  FeritinChart: any;
  PTHChart: any;


  BunData: number[] = [];
  CrData: number[] = [];
  HbData: number[] = [];
  HctData: number[] = [];
  NaData: number[] = [];
  KData: number[] = [];
  CaData: number[] = [];
  PData: number[] = [];
  FeritinData: number[] = [];
  PTHData: number[] = [];
  dates: string[] = [];

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController
  ) { }

  ionViewDidEnter() {
    this.lineChartMethod();
  }

  ngOnInit() {
  }

  lineChartMethod() {
    Storage.get({ key: 'reports' }).then(val => {
      for (const data of JSON.parse(val.value)) {
        this.BunData.push(parseInt(data.Bun, 0))

        this.CrData.push(parseInt(data.Cr, 0))

        this.HbData.push(parseInt(data.Hb, 0))

        this.HctData.push(parseInt(data.Hct, 0))

        this.NaData.push(parseInt(data.Na, 0))

        this.KData.push(parseInt(data.K, 0))

        this.CaData.push(parseInt(data.Ca, 0))

        this.PData.push(parseInt(data.P, 0))

        this.FeritinData.push(parseInt(data.Feritin, 0))

        this.PTHData.push(parseInt(data.PTH, 0))

        this.dates.push(data.date)
      }

      let generatedColor = this.getRandomColor()
      this.BunChart = new Chart(this.BunCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار Bun',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.BunData,
              spanGaps: true,
            },
          ]
        }
      });

      generatedColor = this.getRandomColor()

      this.CrChart = new Chart(this.CrCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار Cr',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.CrData,
              spanGaps: true,
            },
          ]
        }
      });

      generatedColor = this.getRandomColor()

      this.HbChart = new Chart(this.HbCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار Hb',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.HbData,
              spanGaps: true,
            },
          ]
        }
      });


      generatedColor = this.getRandomColor()
      this.HctChart = new Chart(this.HctCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار Hct',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.HctData,
              spanGaps: true,
            },
          ]
        }
      });


      generatedColor = this.getRandomColor()
      this.NaChart = new Chart(this.NaCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار Na',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.NaData,
              spanGaps: true,
            },
          ]
        }
      });


      generatedColor = this.getRandomColor()
      this.KChart = new Chart(this.KCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار K',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.KData,
              spanGaps: true,
            },
          ]
        }
      });


      generatedColor = this.getRandomColor()
      this.CaChart = new Chart(this.CaCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار Ca',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.CaData,
              spanGaps: true,
            },
          ]
        }
      });


      generatedColor = this.getRandomColor()
      this.PChart = new Chart(this.PCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار P',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.PData,
              spanGaps: true,
            },
          ]
        }
      });


      generatedColor = this.getRandomColor()
      this.FeritinChart = new Chart(this.FeritinCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار Feritin',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.FeritinData,
              spanGaps: true,
            },
          ]
        }
      });


      generatedColor = this.getRandomColor()
      this.PTHChart = new Chart(this.PTHCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: 'نمودار PTH',
              borderColor: generatedColor[0],
              borderCapStyle: 'square',
              borderDash: [],
              fill: true,
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: generatedColor[0],
              backgroundColor: generatedColor[1],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: generatedColor[0],
              pointHoverBorderColor: generatedColor[0],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.PTHData,
              spanGaps: true,
            },
          ]
        }
      });

    })
  }
  getRandomColor() {
    var o = Math.round, r = Math.random, s = 255;
    return ['rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')', 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.09 + ')'];
  }

  ionViewDidLeave() {
    this.BunChart.destroy();
    this.BunData = [];
    this.CrChart.destroy();
    this.CrData = [];
    this.HbChart.destroy();
    this.HbData = [];
    this.HctChart.destroy();
    this.HctData = [];
    this.NaChart.destroy();
    this.NaData = [];
    this.KChart.destroy();
    this.KData = [];
    this.CaChart.destroy();
    this.CaData = [];
    this.PChart.destroy();
    this.PData = [];
    this.FeritinChart.destroy();
    this.FeritinData = [];
    this.PTHChart.destroy();
    this.PTHData = [];
    this.dates = [];
  }

  openChartHelpModal(file) {
    this.modalCtrl.create({
      component: ChartHelpComponent,
      componentProps: {file},
      breakpoints: [0.7, 1],
      initialBreakpoint: 0.7
    }).then(modalEl => modalEl.present());
  }
}
