import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { IonContent, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent, IonTitle, IonText, SegmentCustomEvent } from "@ionic/angular/standalone";
import { AnalyticHeaderComponent } from "../../components/analytic.header/analytic.header.component";
import { CurrencyStore } from '../../../currency/stores/currency.store';
import { AnalyticDonutChartComponent } from "../../components/analytic.donut.chart/analytic.donut.chart.component";
import { Currency } from '../../../currency/models/currency';

@Component({
  selector: 'app-analytic-page',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  standalone: true,
  imports: [IonContent, AnalyticHeaderComponent, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent, IonTitle, IonText, AnalyticDonutChartComponent],
})
export class AnalyticPageComponent implements OnInit {
  readonly currencyStore = inject(CurrencyStore);
  readonly selectedCurrency = signal<string | undefined>(undefined);

  constructor() {
    this.selectedCurrency.set(this.currencyStore.currencies()[1].name);
  }

  onSegmentChange(event: SegmentCustomEvent){
    const currency = event.detail.value?.toString();
    this.selectedCurrency.set(currency );
  }

  getPercent(currency: Currency){
    return Math.round((currency.buyInfo.rate/currency.sellInfo.rate)*100);
  }

  ngOnInit() {}
}
