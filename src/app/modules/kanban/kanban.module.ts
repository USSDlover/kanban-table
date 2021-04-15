import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './pages/kanban/kanban.component';
import {SharedModule} from '@shared/shared.module';
import {TaskComponent} from './components/task/task.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [KanbanComponent, TaskComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class KanbanModule { }
