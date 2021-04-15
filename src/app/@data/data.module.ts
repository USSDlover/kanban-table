import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from '@core/import.guard';
import {HttpClientModule} from '@angular/common/http';
import {TasksService} from './services/tasks.service';
import {StoreModule} from '@ngrx/store';
import * as fromTasks from './store/reducers/tasks.reducer';

const Providers = [
  TasksService
];

/**
 * Contains any shared interface, service and models
 * related to DTO and data serving logic
 */
@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({ tasks: fromTasks.tasksReducer })
  ],
  exports: [
    StoreModule
  ]
})
export class DataModule {
  constructor(@Optional() @SkipSelf() parentModule: DataModule) {
    throwIfAlreadyLoaded(parentModule, 'DataModule');
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DataModule,
      providers: [
        ...Providers
      ]
    } as ModuleWithProviders<any>;
  }
}
