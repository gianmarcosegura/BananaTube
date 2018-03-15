import { TestBed, inject } from '@angular/core/testing';

import { LoggedService } from './logged.service';

describe('LoggedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedService]
    });
  });

  it('should be created', inject([LoggedService], (service: LoggedService) => {
    expect(service).toBeTruthy();
  }));
});
