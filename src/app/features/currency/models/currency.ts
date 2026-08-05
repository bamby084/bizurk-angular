interface ExchangeInfo {
  rate: number;
  change: number;
  changeType: "up" | "down";
}


export interface Currency{
  name: string;
  symbol: string;
  buyInfo: ExchangeInfo;
  sellInfo: ExchangeInfo;
}