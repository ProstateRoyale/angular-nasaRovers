import { TestBed } from '@angular/core/testing';

import { NasaRoverService } from './nasa-rover.service';

describe('NasaRoverService', () => {
  let service: NasaRoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaRoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
