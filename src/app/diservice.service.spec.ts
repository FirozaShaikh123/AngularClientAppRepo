import { TestBed } from '@angular/core/testing';

import { DiserviceService } from './diservice.service';

describe('DiserviceService', () => {
  let service: DiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
