import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [],
})
export class DonutComponent {
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other',
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100, 150]];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63'],
    },
  ];
}
