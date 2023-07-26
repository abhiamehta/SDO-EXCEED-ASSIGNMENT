import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWorksSectionComponent } from './recent-works-section.component';

describe('RecentWorksSectionComponent', () => {
  let component: RecentWorksSectionComponent;
  let fixture: ComponentFixture<RecentWorksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentWorksSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentWorksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
