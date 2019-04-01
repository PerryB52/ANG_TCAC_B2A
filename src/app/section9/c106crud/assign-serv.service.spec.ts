import { TestBed, inject } from '@angular/core/testing';

import { AssignServService } from './assign-serv.service';

describe('AssignServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignServService]
    });
  });

  it('should be created', inject([AssignServService], (service: AssignServService) => {
    expect(service).toBeTruthy();
  }));
});
