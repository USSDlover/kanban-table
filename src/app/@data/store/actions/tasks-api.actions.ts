import {createAction, props} from '@ngrx/store';
import {ITask} from '@data/interfaces';
import {HttpErrorResponse} from '@angular/common/http';

export const load = createAction('[Tasks API] Load Tasks');

export const loaded = createAction(
  '[Tasks API] Tasks Loaded Success',
  props<{ tasks: ITask[] }>()
);

export const loadedFailure = createAction(
  '[Tasks API] Tasks Loaded Error',
  props<{ error: HttpErrorResponse }>()
);

