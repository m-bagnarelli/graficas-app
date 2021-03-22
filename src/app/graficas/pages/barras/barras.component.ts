import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: 'rgb(53,17,250)', hoverBackgroundColor: 'rgba(53,17,250, 0.5)' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: 'rgb(230,19,18)', hoverBackgroundColor: 'rgba(230,19,18, 0.5)' },
    { data: [7, 43, 35, 22, 17, 81, 65], label: 'Series C', backgroundColor: 'rgb(250,27,217)', hoverBackgroundColor: 'rgba(250,27,217, 0.5)' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
      this.barChartData[2].data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40 ];
  }
}
