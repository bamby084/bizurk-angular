import { Component, effect, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { IonContent, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent, IonText, SegmentCustomEvent } from "@ionic/angular/standalone";
import { AnalyticHeaderComponent } from "../../components/analytic.header/analytic.header.component";
import { CurrencyStore } from '../../../currency/stores/currency.store';
import { AnalyticDonutChartComponent } from "../../components/analytic.donut.chart/analytic.donut.chart.component";
import { Currency } from '../../../currency/models/currency';
import { AnimationService } from '../../../../shared/services/animation.service';
import { CountUpDirective } from '../../../../shared/directives/count.up.directive';

@Component({
  selector: 'app-analytic-page',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  standalone: true,
  imports: [IonContent, AnalyticHeaderComponent, IonSegment, 
    IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent, 
    IonText, AnalyticDonutChartComponent, CountUpDirective],
})
export class AnalyticPageComponent implements OnInit {
  @ViewChild('content') contentPage!: ElementRef<HTMLDivElement>
  readonly currencyStore = inject(CurrencyStore);
  readonly selectedCurrency = signal<string | undefined>(undefined);
  readonly animationService = inject(AnimationService);

  constructor() {
    this.selectedCurrency.set(this.currencyStore.currencies()[1].name);
  }

  async ionViewWillEnter() {
    const animation = await this.animationService.fadeIn(this.contentPage.nativeElement, 500);
    animation.destroy();
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
