import {ITask} from '@data/interfaces';

export class Task implements ITask {
  completed: boolean;
  id: number;
  order: number;
  title: string;
  userId: number;

  static create(value: ITask): Task {
    const task = new Task();
    return Object.assign(task, value);
  }

  static dummy(): Task {
    return Task.create({
      completed: (Math.floor(Math.random() * 10)) % 2 === 0,
      id: new Date().getTime(),
      order: 0,
      title: 'Something good' + (new Date().getTime() / 100000),
      userId: 1
    });
  }
}
