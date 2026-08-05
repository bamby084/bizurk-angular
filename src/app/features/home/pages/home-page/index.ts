import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { IonContent, IonInput, IonButton, NavController, IonText } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../components/header/header.component";
import { VerticalSliderComponent } from "../../../../shared/components/vertical.slider/vertical.slider.component";
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AnimationService } from '../../../../shared/services/animation.service';
import { CountUpDirective } from '../../../../shared/directives/count.up.directive';

@Component({
  selector: 'app-home-page',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, IonInput, IonButton,
    VerticalSliderComponent, CountUpDirective, IonText],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('content') contentPage!: ElementRef<HTMLDivElement>
  readonly router = inject(Router);
  readonly leftValue = signal(1600);
  readonly rightValue = signal(2100);
  readonly nav = inject(NavController);
  readonly animationController = inject(AnimationController);
  readonly animationService = inject(AnimationService);
  readonly enableNumberCountUp = signal<boolean>(true);

  async ionViewWillEnter() {
    const animation = await this.animationService.fadeIn(this.contentPage.nativeElement, 500);
    animation.destroy();
  }

  onCardClick(value: number){
    this.nav.navigateForward(`/tabs/currency/${value}`,)
  }

  ngAfterViewInit(){
    this.enableNumberCountUp.set(false);
  }
}
