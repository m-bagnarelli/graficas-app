import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [
/*     '2006', '2007', '2008', '2009', '2010', '2011', '2012' */
  ];
  @Input() barChartData: ChartDataSets[] = [
/*     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: 'rgb(53,17,250)', hoverBackgroundColor: 'rgba(53,17,250, 0.5)' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: 'rgb(230,19,18)', hoverBackgroundColor: 'rgba(230,19,18, 0.5)' },
    { data: [7, 43, 35, 22, 17, 81, 65], label: 'Series C', backgroundColor: 'rgb(250,27,217)', hoverBackgroundColor: 'rgba(250,27,217, 0.5)' } */
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit(): void {
    if ( this.horizontal ) {
      this.barChartType = 'horizontalBar';
    }
  }

}
