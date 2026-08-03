import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {ellipsisHorizontal} from "ionicons/icons";

@Component({
  selector: 'app-more-button',
  templateUrl: './more.button.component.html',
  styleUrls: ['./more.button.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon],
})
export class MoreButtonComponent implements OnInit {
  constructor() {
    addIcons({ellipsisHorizontal})
  }

  ngOnInit() {}
}
