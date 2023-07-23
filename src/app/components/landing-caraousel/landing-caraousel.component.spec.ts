import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCaraouselComponent } from './landing-caraousel.component';

describe('LandingCaraouselComponent', () => {
  let component: LandingCaraouselComponent;
  let fixture: ComponentFixture<LandingCaraouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingCaraouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingCaraouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
