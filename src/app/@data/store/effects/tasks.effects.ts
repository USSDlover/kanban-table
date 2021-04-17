import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import * as TasksAction from '../actions';
import {TasksService} from '@data/services/tasks.service';

@Injectable()
export class TasksEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksAction.load),
      exhaustMap(() =>
        this.taskService.fetchTasks().pipe(
          map(tasks => TasksAction.loaded({ tasks })),
          catchError(error => of(TasksAction.loadedFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private taskService: TasksService
  ) {
  }
}
