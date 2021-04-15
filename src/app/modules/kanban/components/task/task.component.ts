import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {ITask} from '@data/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Output() edit = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

}
