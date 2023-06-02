import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCardsComponent } from './grade-cards.component';

describe('GradeCardsComponent', () => {
  let component: GradeCardsComponent;
  let fixture: ComponentFixture<GradeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
