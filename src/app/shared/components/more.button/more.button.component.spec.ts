import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoreButtonComponent } from './more.button.component';

describe('MoreButtonComponent', () => {
  let component: MoreButtonComponent;
  let fixture: ComponentFixture<MoreButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MoreButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
