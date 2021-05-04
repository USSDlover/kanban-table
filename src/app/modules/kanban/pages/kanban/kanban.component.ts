import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ITask} from '@data/interfaces';
import {KanbanService} from './kanban.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  providers: [KanbanService]
})
export class KanbanComponent implements OnInit {

  constructor(public tasks: KanbanService) {}

  public ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray<ITask>(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      return;
    }
    transferArrayItem<ITask>(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  public onSearch(ev: any, column: 'done' | 'todo'): void {
    this.tasks.searchFor(ev.target.value, column);
  }
}
