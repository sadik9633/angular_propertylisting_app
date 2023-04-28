import { TestBed } from '@angular/core/testing';

import { ProprtyService } from './proprty.service';

describe('ProprtyService', () => {
  let service: ProprtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProprtyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
