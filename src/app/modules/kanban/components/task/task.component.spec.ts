import {ComponentFixture, TestBed} from '@angular/core/testing';

import { TaskComponent } from './task.component';
import {Task} from '@data/models/task';
import {MatCardModule} from '@angular/material/card';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view task correctly', async () => {
    component.task = Task.dummy();
    await fixture.detectChanges();
  });
});
