import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExerciseDatabindingComponent } from './app-exercise-databinding.component';

describe('AppExerciseDatabindingComponent', () => {
  let component: AppExerciseDatabindingComponent;
  let fixture: ComponentFixture<AppExerciseDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExerciseDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExerciseDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
