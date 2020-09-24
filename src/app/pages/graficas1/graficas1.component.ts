import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [],
})
export class Graficas1Component implements OnInit {
  // // Pie
  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  //   legend: {
  //     position: 'right',
  //   },
  // };

  // public pieChartLabels: Label[] = [
  //   ['Download', 'Sales'],
  //   ['In', 'Store', 'Sales'],
  //   'Mail Sales',
  // ];

  // public pieChartData: number[] = [300, 500, 100];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChartColors = [
  //   {
  //     backgroundColor: [
  //       'rgba(255,0,0,0.3)',
  //       'rgba(0,255,0,0.3)',
  //       'rgba(0,0,255,0.3)',
  //     ],
  //   },
  // ];

  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con',
      charPosition: 'top',
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados',
    },
    grafico3: {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?',
    },
    grafico4: {
      labels: ['No', 'Si'],
      data: [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
