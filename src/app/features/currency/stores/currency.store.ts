import { Injectable, signal } from "@angular/core";
import { Currency } from "../models/currency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyStore{
  readonly currencies = signal<Currency[]>([]);
  
  loadCurrencies(){
    this.currencies.set([
      {
        name: "USD",
        symbol: "$",
        buyInfo: {
          rate: 23.568,
          change: -0.046,
          changeType: "down"
        },
        sellInfo: {
          rate: 36.143,
          change: -0.056,
          changeType: "up"
        }
      },
      {
        name: "EUR",
        symbol: "€",
        buyInfo: {
          rate: 17.376,
          change: -0.056,
          changeType: "up",
        },
        sellInfo: {
          rate: 21.113,
          change: -0.087,
          changeType: "up"
        }
      },{
        name: "GBP",
        symbol: "£",
        buyInfo: {
          rate: 12.766,
          change: -0.056,
          changeType: "down"
        },
        sellInfo: {
          rate: 36.076,
          change: -0.087,
          changeType: "down"
        }
      }
    ])
  }

  constructor(){
    this.loadCurrencies();
  }
}