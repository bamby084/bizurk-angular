import { Component, OnInit } from '@angular/core';
import { IonContent, IonSpinner, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-loading',
  templateUrl: './app.loading.component.html',
  styleUrls: ['./app.loading.component.scss'],
  standalone: true,
  imports: [IonContent, IonSpinner, IonText],
})
export class AppLoadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
