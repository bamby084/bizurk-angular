import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonIcon, NavController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {chevronBack} from "ionicons/icons";

@Component({
  selector: 'app-back-button',
  templateUrl: './back.button.component.html',
  styleUrls: ['./back.button.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon],
})
export class BackButtonComponent implements OnInit {
  readonly nav = inject(NavController);
  
  constructor() {
    addIcons({chevronBack});
  }

  goBack(){
    this.nav.back();
  }

  ngOnInit() {}
}
