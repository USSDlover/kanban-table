import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ITask} from '@data/interfaces';
import {Store} from '@ngrx/store';
import {fetch, search} from '@data/store/actions/tasks.actions';

@Injectable()
export class TasksService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

  searchForTask(terms: string): void {
    this.store.dispatch(search({ terms }));
  }

  fetchTasksFromStore(): void {
    this.store.dispatch(fetch());
  }

  fetchTasks(): Observable<ITask[]> {
    return this.http
      .get<Array<ITask>>
      ('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        tap(res => console.log('Pure Res', res)),
        // map(res => res.json()),
        // tap(res => console.log('Parsed', res))
      );
  }

  findTaskById(id: number): Observable<ITask> {
    return this.http
      .get<{ json: () => any }>
      (`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(
        tap(res => console.log('Pure Res', res)),
        map(res => res.json()),
        tap(res => console.log('Parsed', res))
      );
  }
}
