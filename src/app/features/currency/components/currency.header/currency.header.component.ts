import { Component, OnInit } from '@angular/core';
import { MoreButtonComponent } from "../../../../shared/components/more.button/more.button.component";
import { BackButtonComponent } from "../../../../shared/components/back.button/back.button.component";

@Component({
  selector: 'currency-header',
  templateUrl: './currency.header.component.html',
  styleUrls: ['./currency.header.component.scss'],
  standalone: true,
  imports: [MoreButtonComponent, BackButtonComponent],
})
export class CurrencyHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
