import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ITask} from '@data/interfaces';
import {TodosService} from '@data/services/todos.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {
  public todo: ITask[] = [];
  public done: ITask[] = [];
  private tasksSub: Subscription;

  constructor(private service: TodosService) {
  }

  public ngOnDestroy(): void {
    if (this.tasksSub) {
      this.tasksSub.unsubscribe();
    }
  }

  public ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(): void {
    this.tasksSub = this.service.fetchTodos()
      .subscribe({
        next: (res) => {
          for (const task of res) {
            if (task.completed) {
              this.done.push(task);
            } else {
              this.todo.push(task);
            }
          }
        }
      });
  }

  public drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray<ITask>(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];
    transferArrayItem<ITask>(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}
