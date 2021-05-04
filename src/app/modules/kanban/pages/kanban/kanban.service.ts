import {Injectable, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {ITask} from '@data/interfaces';
import {BehaviorSubject, Subscription} from 'rxjs';

@Injectable()
export class KanbanService implements OnDestroy {
  private _todo: ITask[] = [];
  private _done: ITask[] = [];

  public todo$ = new BehaviorSubject(this._todo);
  public done$ = new BehaviorSubject(this._done);

  private tasksSub: Subscription;

  constructor(private store: Store<{ tasks: ITask[] }>) {
    this.getTasks();
    this.store.dispatch({ type: '[Tasks API] Load Tasks' });
  }

  private getTasks(): void {
    this.tasksSub = this.store
      .select(state => {
        return state.tasks;
      })
      .subscribe(tasks => {
        if (tasks.length > 0) {
          this._todo = [];
          this._done = [];
          for (const task of tasks) {
            if (task.completed) {
              this._done.push(task);
            } else {
              this._todo.push(task);
            }
          }
          this.todo$.next(this._todo);
          this.done$.next(this._done);
        }
      });
  }

  public ngOnDestroy(): void {
    if (this.tasksSub) {
      this.tasksSub.unsubscribe();
    }
  }

  public sortBy(): void {
  }

  public searchFor(query: string, columnName: 'todo' | 'done'): void {
    switch (columnName) {
      case 'done':
        // this.store.dispatch({ type: '[Tasks Page] Search Task', query });
        this.done$.next(this.searchThroughTasks(query, this._done));
        break;
      case 'todo':
        this.todo$.next(this.searchThroughTasks(query, this._todo));
        break;
      default:
        break;
    }
  }

  private searchThroughTasks(query: string, array: ITask[]): ITask[] {
    const regEx = new RegExp(query, 'gi');
    return array.map((task) => {
      if (regEx.test(task.title)) {
        return task;
      }
    });
  }

}
