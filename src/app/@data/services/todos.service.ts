import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ITask} from '@data/interfaces';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {
  }

  fetchTodos(): Observable<ITask[]> {
    return this.http
      .get<Array<ITask>>
      ('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        tap(res => console.log('Pure Res', res)),
        // map(res => res.json()),
        // tap(res => console.log('Parsed', res))
      );
  }

  fetchTodoById(id: number): Observable<ITask> {
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
