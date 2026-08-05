import { Component, OnInit } from '@angular/core';
import { IonIcon, IonButton } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {settingsOutline} from "ionicons/icons";

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings.button.component.html',
  styleUrls: ['./settings.button.component.scss'],
  imports: [IonIcon, IonButton],
})
export class SettingsButtonComponent implements OnInit {
  constructor() {
    addIcons({settingsOutline});
  }

  ngOnInit() {}
}
