import {createAction, props} from '@ngrx/store';
import {ITask} from '@data/interfaces';

export const add = createAction(
  '[Tasks API] Add',
  props<{ tasks: { todo: ITask[], done: ITask[] } }>()
);

export const fetch = createAction(
  '[Tasks Page] Fetch'
);

export const search = createAction(
  '[Tasks Page] Search',
  props<{ terms: string }>()
);
