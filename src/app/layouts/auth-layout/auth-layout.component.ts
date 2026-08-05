import { Component, OnInit } from '@angular/core';
import { IonContent, IonRouterOutlet } from "@ionic/angular/standalone";


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  standalone: true,
  imports: [IonContent, IonRouterOutlet],
})
export class AuthLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
