import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from "../../../../shared/components/back.button/back.button.component";
import { SettingsButtonComponent } from "../../../../shared/components/settings.button/settings.button.component";

@Component({
  selector: 'app-analytic-header',
  templateUrl: './analytic.header.component.html',
  styleUrls: ['./analytic.header.component.scss'],
  imports: [BackButtonComponent, SettingsButtonComponent],
})
export class AnalyticHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
