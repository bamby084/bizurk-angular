import { Component, inject, OnInit, signal } from '@angular/core';
import { IonContent, IonText, IonIcon, IonRippleEffect } from "@ionic/angular/standalone";
import { CurrencyHeaderComponent } from "../../components/currency.header/currency.header.component";
import { CurrencyStore } from '../../stores/currency.store';
import {arrowDownOutline, arrowUpOutline} from "ionicons/icons";
import { addIcons } from 'ionicons';
import { Currency } from '../../models/currency';
import { CurrencyChartComponent } from "../../components/currency.chart/currency.chart.component";

@Component({
  selector: 'app-currency-page',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  imports: [IonContent, CurrencyHeaderComponent, IonText, IonIcon, IonRippleEffect, CurrencyChartComponent],
})
export class CurrencyComponent implements OnInit {
  readonly currencyStore = inject(CurrencyStore);
  readonly selectedCurrency = signal<Currency|null>(null);
  
  constructor() {
    addIcons({arrowDownOutline, arrowUpOutline});
    this.selectedCurrency.set(this.currencyStore.currencies()[0]);
  }

  setSelectCurrency(currency: Currency){
    this.selectedCurrency.set(currency);
  }

  ngOnInit() {}
}
