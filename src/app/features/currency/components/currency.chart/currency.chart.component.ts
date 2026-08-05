import { AfterViewInit, Component, effect, ElementRef, input, OnDestroy, output, signal, ViewChild } from '@angular/core';
import { BarElement, Chart, ChartDataset, ScriptableContext } from 'chart.js/auto';
import { Currency } from '../../models/currency';
import { IonText, IonIcon, IonRippleEffect } from "@ionic/angular/standalone";
import {chevronDown} from "ionicons/icons";
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency.chart.component.html',
  styleUrls: ['./currency.chart.component.scss'],
  imports: [IonText, IonIcon, IonRippleEffect],
})
export class CurrencyChartComponent implements OnDestroy, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  readonly chart = signal<Chart|null>(null);
  readonly currencies = input<Currency[]>([]);
  readonly onClose = output<void>();

  createBarBackground(context: ScriptableContext<"bar">): CanvasGradient{
    const {chart} = context;
    const metadata = chart.getDatasetMeta(context.datasetIndex);
    const bar = metadata.data[context.dataIndex] as BarElement;
    const barProps = bar.getProps(["y", "base"], true);
    const gradient = chart.ctx.createLinearGradient(0, barProps.y ?? chart.chartArea.top ,
      0, barProps.base ??  chart.chartArea.bottom);
    gradient.addColorStop(0, "#EFFDFE");
    gradient.addColorStop(1, "#87EBFD");
    return gradient;
  }

  constructor() {
    addIcons({chevronDown});

    effect(() => {
      const chart = this.chart();
      if(!chart){
        return;
      }

      const labels = this.currencies().map(c => c.name);
      const datasets: ChartDataset[] = [{
        label: "Buy",
        data: this.currencies().map(c => c.buyInfo.rate),
        barThickness: 40,
        maxBarThickness: 30,
        backgroundColor: this.createBarBackground 
      },{
        label: "Sell",
        data: this.currencies().map(c => c.sellInfo.rate),
        barThickness: 40,
        maxBarThickness: 30,
        backgroundColor: this.createBarBackground
      }];

      chart.data.labels = labels;
      chart.data.datasets = datasets;
      chart.update();
    })
  }

  close(){
    this.onClose.emit();
  }

  initializeChart(){
    const chart = new Chart(this.chartCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: [],
        datasets: []
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false
            },
            ticks: {
              color: "#FFF",
              font: {
                size: 14
              }
            }
          },
          y: {
            grid:{
              display: false,
            },
            border: {
              display: false
            },
            ticks: {
              display: false
            }
          }
        }
      }
    });

    this.chart.set(chart);
  }

  ngAfterViewInit() {
    this.initializeChart();
  }

  ngOnDestroy(): void {
    this.chart()?.destroy();
  }
}
