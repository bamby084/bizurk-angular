import { Component, effect, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical.slider.component.html',
  styleUrls: ['./vertical.slider.component.scss'],
  standalone: true,
})
export class VerticalSliderComponent implements OnInit {
  value = model(0);

  onInput(event: Event){
    this.value.set((event.target as HTMLInputElement).valueAsNumber);
  }

  constructor() {
    effect(() => {
      console.log('Value:', this.value());
    });
  }

  ngOnInit() {}
}
