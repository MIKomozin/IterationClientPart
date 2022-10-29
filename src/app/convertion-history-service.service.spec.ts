import { TestBed } from '@angular/core/testing';

import { ConvertionHistoryServiceService } from './convertion-history-service.service';

describe('ConvertionHistoryServiceService', () => {
  let service: ConvertionHistoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertionHistoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
