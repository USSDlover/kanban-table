import {Action, createReducer, on} from '@ngrx/store';
import * as TaskActions from '../actions';
import {ITask} from '@data/interfaces';

export const initialState: State = [];

export type State = ITask[];

const _storeTodoReducer = createReducer(
  initialState,
  on(TaskActions.load, state => ({...state})),
  on(TaskActions.loaded, (state, action) => {
    return action.tasks;
  })
);

export function tasksReducer(state: State | undefined, action: Action): ITask[] {
  return _storeTodoReducer(state, action);
}
