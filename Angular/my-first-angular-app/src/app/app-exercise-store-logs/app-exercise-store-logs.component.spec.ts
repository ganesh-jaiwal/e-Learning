import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExerciseStoreLogsComponent } from './app-exercise-store-logs.component';

describe('AppExerciseStoreLogsComponent', () => {
  let component: AppExerciseStoreLogsComponent;
  let fixture: ComponentFixture<AppExerciseStoreLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExerciseStoreLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExerciseStoreLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
