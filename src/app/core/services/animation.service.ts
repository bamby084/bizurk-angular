import { inject, Injectable } from '@angular/core';
import {  Animation, AnimationController} from '@ionic/angular/standalone';

@Injectable({ providedIn: 'root' })
export class AnimationService{
  readonly animationController = inject(AnimationController);

  async fadeIn(element: Element, duration: number = 200): Promise<Animation>{
    const animation = this.animationController.create()
      .addElement(element)
      .duration(duration)
      .easing('ease-out')
      .fromTo("opacity", "0", "1");
    await animation.play();

    return animation;
  }
}