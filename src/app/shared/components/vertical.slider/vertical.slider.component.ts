import { Component, computed, effect, input, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical.slider.component.html',
  styleUrls: ['./vertical.slider.component.scss'],
  standalone: true,
})
export class VerticalSliderComponent {
  value = model(0);
  min = model(0);
  max = model(200);
  step = model(1);
  labels = input<number[]>();
  showLabels = input<boolean>(false);

  onInput(event: Event){
    this.value.set((event.target as HTMLInputElement).valueAsNumber);
  }

  progress = computed(() => {
    return ((this.value() - this.min())/(this.max() - this.min())) * 100;
  });

  getLabelPosition(label: number) {
    return ((label - this.min())/(this.max() - this.min())) * 100;
  }


  constructor() {
    effect(() => {
      const value = this.value();
      const min = this.min();
      const max = this.max();

      if (value < min) {
        this.value.set(min);
      } else if (value > max) {
        this.value.set(max);
      }
    });
  }
}
