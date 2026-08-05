import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { Currency } from "../models/currency";
import { interval } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyStore{
  readonly currencies = signal<Currency[]>([]);

  constructor(){
    this.setDefaultCurrencies();
  }

  setDefaultCurrencies(){
    this.currencies.set([
      {
        name: "USD",
        symbol: "$",
        buyInfo: {
          rate: 23568,
          change: -0.046,
          changeType: "down"
        },
        sellInfo: {
          rate: 36143,
          change: -0.056,
          changeType: "up"
        }
      },
      {
        name: "EUR",
        symbol: "€",
        buyInfo: {
          rate: 17376,
          change: -0.056,
          changeType: "up",
        },
        sellInfo: {
          rate: 21113,
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
          rate: 36076,
          change: -0.087,
          changeType: "down"
        }
      }
    ])
  }

  set(newCurrencies: Currency[]){
    this.currencies.set(newCurrencies);
  }
}