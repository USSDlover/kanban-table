import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {ITask} from '@data/interfaces';

@Injectable()
export class TasksService {
  constructor(
    private http: HttpClient,
  ) {
  }

  fetchTasks(): Observable<ITask[]> {
    return this.http
      .get<Array<ITask>>
      ('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        tap(res => console.log('Pure Res', res))
      );
  }

  findTaskById(id: number): Observable<ITask> {
    return this.http
      .get<ITask>
      (`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(
        tap(res => console.log('Pure Res', res))
      );
  }
}
