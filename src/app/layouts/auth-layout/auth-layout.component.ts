import { Component, OnInit } from '@angular/core';
import { IonContent, IonRouterOutlet } from "@ionic/angular/standalone";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  standalone: true,
  imports: [IonContent, RouterOutlet, IonRouterOutlet],
})
export class AuthLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
