import { Component, inject, OnInit, signal } from '@angular/core';
import { IonContent, IonInput, IonButton, NavController } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../components/header/header.component";
import { VerticalSliderComponent } from "../../../../shared/components/vertical.slider/vertical.slider.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, IonInput, IonButton, VerticalSliderComponent],
})
export class HomeComponent implements OnInit {
  readonly router = inject(Router);
  readonly leftValue = signal(1600);
  readonly rightValue = signal(2100);
  readonly nav = inject(NavController);

  onCardClick(value: number){
    this.nav.navigateForward(`/tabs/currency/${value}`,)
  }

  constructor() {}

  ngOnInit() {}
}
