import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page.layout.component.html',
  styleUrls: ['./page.layout.component.scss'],
  standalone: true,
  imports: [IonContent],
})
export class PageLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
