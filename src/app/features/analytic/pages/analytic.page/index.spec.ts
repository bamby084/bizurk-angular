import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnalyticPageComponent } from './analytic.page.component';

describe('AnalyticPageComponent', () => {
  let component: AnalyticPageComponent;
  let fixture: ComponentFixture<AnalyticPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AnalyticPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
