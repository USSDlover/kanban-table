import {createAction, props} from '@ngrx/store';
import {ITask} from '@data/interfaces';
import {TaskSortBy} from '@data/types';

export const searchTask = createAction(
  '[Tasks Page] Search Task',
  props<{ query: string }>()
);

export const searchSuccess = createAction(
  '[Tasks Page] Search Success',
  props<{ tasks: ITask[] }>()
);

export const searchFailure = createAction(
  '[Tasks Page] Search Failure'
);

export const sortColumn = createAction(
  '[Tasks Page] Sort Column',
  props<{ tasks: ITask[], sortBy: TaskSortBy }>()
);
