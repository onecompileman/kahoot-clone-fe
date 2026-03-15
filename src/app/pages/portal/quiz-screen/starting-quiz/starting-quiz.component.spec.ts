import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingQuizComponent } from './starting-quiz.component';

describe('StartingQuizComponent', () => {
  let component: StartingQuizComponent;
  let fixture: ComponentFixture<StartingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartingQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
