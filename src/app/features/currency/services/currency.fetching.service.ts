import { inject, Injectable } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { Currency } from "../models/currency";
import { CurrencyStore } from "../stores/currency.store";

@Injectable({providedIn: "root"})
export class CurrencyFetchingService{
  readonly currencyStore = inject(CurrencyStore);
  timer: Subscription | null = null;

  public start(){
    if(this.timer !== null){
      return;
    }
    
    this.timer = interval(3000).subscribe(() => {
      const currencies: Currency[] = [
      {
        name: "USD",
        symbol: "$",
        buyInfo: {
          rate: this.randomRate(1000, 30000),
          change: this.randomChange(),
          changeType: "down"
        },
        sellInfo: {
          rate: this.randomRate(1000, 30000),
          change: this.randomChange(),
          changeType: "up"
        }
      },
      {
        name: "EUR",
        symbol: "€",
        buyInfo: {
          rate: this.randomRate(1000, 30000),
          change: this.randomChange(),
          changeType: "up",
        },
        sellInfo: {
          rate: this.randomRate(1000, 30000),
          change: this.randomChange(),
          changeType: "up"
        }
      },{
        name: "GBP",
        symbol: "£",
        buyInfo: {
          rate: this.randomRate(1000, 30000),
          change: this.randomChange(),
          changeType: "down"
        },
        sellInfo: {
          rate: this.randomRate(1000, 30000),
          change: this.randomChange(),
          changeType: "down"
        }
      }];

      this.currencyStore.set(currencies);
    })
  }

  public stop(){
    this.timer?.unsubscribe();
    this.timer = null;
  }

  private randomRate(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomChange(){
    return Number((Math.random() *2 -1).toFixed(3));
  }
}