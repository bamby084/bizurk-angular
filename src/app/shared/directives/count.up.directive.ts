import { DestroyRef, Directive, effect, ElementRef, inject, input, OnInit, Renderer2 } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { animationFrames, endWith, map, takeUntil, takeWhile } from "rxjs";

@Directive({
  selector: '[countUp]',
  standalone: true
})
export class CountUpDirective implements OnInit{
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  private destroyRef = inject(DestroyRef);
  public duration = input<number>(2000);
  public target = input<number>(0);
  public enable = input<boolean>(true);

  ngOnInit(): void {
  }

  constructor(){
    effect(() =>{
      if(this.enable()){
        this.animate(this.target());
      }else{
        this.renderer.setProperty(this.element.nativeElement, "textContent", this.target());
      }
    })
  }

  animate(value: number){
    animationFrames().pipe(
      map(x => x.elapsed/this.duration()),
      takeWhile(progress => progress < 1),
      endWith(1),
      map(progress => {
        return Math.floor(progress*value);
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(currentValue => {
      this.renderer.setProperty(this.element.nativeElement, "textContent", currentValue);
    });
  }
}