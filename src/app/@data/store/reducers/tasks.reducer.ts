import {Action, createReducer, on} from '@ngrx/store';
import * as TaskActions from '../actions/tasks.actions';
import {ITask} from '@data/interfaces';

// export const initialState: ITask[] = [];
export const initialState: State = {
  todo: [],
  done: [],
};

export interface State {
  todo: ITask[];
  done: ITask[];
}

const _storeTodoReducer = createReducer(
  initialState,
  on(TaskActions.add, (state, { tasks } ) =>
    ({ todo: tasks.todo, done: tasks.done })),
  on(TaskActions.fetch, (state) => ({...state})),
  on(TaskActions.search, state => ({...state}))
);

async function getDataFromApi(): Promise<State> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const tasks: ITask[] = await res.json();
  const state: State = {
    done: [],
    todo: []
  };

  for (const task of tasks) {
    if (task.completed) {
      state.done.push(task);
    } else {
      state.todo.push(task);
    }
  }

  return state;
}

export function tasksReducer(state: State | undefined, action: Action): any {
  return _storeTodoReducer(state, action);
}
