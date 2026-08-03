import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonButton } from "@ionic/angular/standalone";
import { HeaderComponent } from "./components/header/header.component";
import { VerticalSliderComponent } from "../../shared/components/vertical.slider/vertical.slider.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, IonInput, IonButton, VerticalSliderComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
