import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-help',
  templateUrl: './chart-help.component.html',
  styleUrls: ['./chart-help.component.scss'],
})
export class ChartHelpComponent implements OnInit {

  @Input('file') file;
  title = 'درحال بارگزاری';
  description = 'درحال بارگزاری'
  
  constructor(
    private http: HttpClient
  ) {
    
  }

  ngOnInit() {
    this.http.get('assets/files/chart-help/'+this.file).subscribe(res => {     
      this.title = res['title'];
      this.description = res['description']
    })
  }

}
