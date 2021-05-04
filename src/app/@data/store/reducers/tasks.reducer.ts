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
  }),
  on(TaskActions.searchTask, (state, action) => {
    const regEx = new RegExp(action.query, 'gi');
    return state.slice().filter(task => {
      if (regEx.test(task.title)) {
        return task;
      }
    });
  })
);

export function tasksReducer(state: State | undefined, action: Action): ITask[] {
  return _storeTodoReducer(state, action);
}
