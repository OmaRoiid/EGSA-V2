import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideimgsComponent } from './slideimgs.component';

describe('SlideimgsComponent', () => {
  let component: SlideimgsComponent;
  let fixture: ComponentFixture<SlideimgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideimgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideimgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
