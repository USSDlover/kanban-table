import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanComponent } from './kanban.component';
import {Observable, of} from 'rxjs';
import {ITask} from '@data/interfaces';
import {Task} from '@data/models/task';
import {TasksService} from '@data/services/todos.service';
import {SharedModule} from '@shared/shared.module';

class MockTodoService {
  fetchTodos(): Observable<ITask[]> {
    return of(Array.from({length: 10}, Task.dummy));
  }
}

describe('KanbanComponent', () => {
  let component: KanbanComponent;
  let fixture: ComponentFixture<KanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: TasksService, useClass: MockTodoService}],
      declarations: [ KanbanComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
