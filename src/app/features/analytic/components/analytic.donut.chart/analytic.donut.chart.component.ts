import { AfterViewInit, Component, effect, ElementRef, input, OnDestroy, signal, ViewChild } from '@angular/core';
import { Currency } from '../../../currency/models/currency';
import { Chart, ChartDataset, ScriptableContext } from 'chart.js/auto';

@Component({
  selector: 'app-analytic-donut-chart',
  templateUrl: './analytic.donut.chart.component.html',
  styleUrls: ['./analytic.donut.chart.component.scss'],
})
export class AnalyticDonutChartComponent implements OnDestroy, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  readonly currency = input<Currency>();
  readonly chart = signal<Chart|null>(null);
  readonly colorCodes: string[] = ["#88D2FA", "#81CCFA", "#DAF9FE", "#FFFFFF", "#14A9F7", "#1784F0"]

  constructor() {
    effect(()=>{
      const chart = this.chart();
      const currency = this.currency();

      if(!chart || !currency){
        return;
      }

      const datasets: ChartDataset[] = [{
        data: [currency.buyInfo.rate, currency.sellInfo.rate, Math.random()*70],
        backgroundColor: this.createArcBackground
      }];

      chart.data.datasets = datasets;
      chart.update();
    });
  }

  ngOnDestroy(){
    this.chart()?.destroy();
  }

  createArcBackground (context: ScriptableContext<'doughnut'>): CanvasGradient{
    const colorCodes: string[] = ["#88D2FA", "#81CCFA", "#DAF9FE", "#FFFFFF", "#14A9F7", "#1784F0"]
    const {chart} = context;
  
    const gradient = chart.ctx.createLinearGradient(0,0,0,chart.height);
    const index = context.dataIndex;
    gradient.addColorStop(0, colorCodes[index*2]);
    gradient.addColorStop(1, colorCodes[index*2 + 1]);
    
    return gradient;
  }
  
  initializeChart(){
    const chart = new Chart(this.chartCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Buy", "Sell", "Unknown"],
        datasets: []
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    this.chart.set(chart);
  }

  ngAfterViewInit(){
    this.initializeChart();
  }
}
