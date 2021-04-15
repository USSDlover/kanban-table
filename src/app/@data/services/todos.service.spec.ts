import {TodosService} from '@data/services/todos.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodosService]
    });
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
