import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { IonContent, IonText, IonIcon, IonRippleEffect } from "@ionic/angular/standalone";
import { CurrencyHeaderComponent } from "../../components/currency.header/currency.header.component";
import { CurrencyStore } from '../../stores/currency.store';
import {arrowDownOutline, arrowUpOutline} from "ionicons/icons";
import { addIcons } from 'ionicons';
import { Currency } from '../../models/currency';
import { CurrencyChartComponent } from "../../components/currency.chart/currency.chart.component";
import { AnimationService } from '../../../../shared/services/animation.service';
import { DecimalPipe } from '@angular/common';
import { CurrencyFetchingService } from '../../services/currency.fetching.service';

@Component({
  selector: 'app-currency-page',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  imports: [IonContent, CurrencyHeaderComponent, IonText, IonIcon, 
    IonRippleEffect, CurrencyChartComponent, DecimalPipe],
})
export class CurrencyComponent {
  @ViewChild('content') contentPage!: ElementRef<HTMLDivElement>
  readonly currencyStore = inject(CurrencyStore);
  readonly selectedCurrency = signal<Currency|null>(null);
  readonly showCurrencyChart = signal<boolean>(true);
  readonly animationService = inject(AnimationService);
  readonly currencyService = inject(CurrencyFetchingService);

  constructor() {
    addIcons({arrowDownOutline, arrowUpOutline});
    this.selectedCurrency.set(this.currencyStore.currencies()[0]);
  }

  async ionViewWillEnter() {
    const animation = await this.animationService.fadeIn(this.contentPage.nativeElement, 500);
    animation.destroy();
    this.currencyService.start();
  }

  ionViewDidLeave(){
    this.currencyService.stop();
  }

  setSelectCurrency(currency: Currency){
    this.selectedCurrency.set(currency);
  }

  closeChart(){
    this.showCurrencyChart.set(false);
  }
}
