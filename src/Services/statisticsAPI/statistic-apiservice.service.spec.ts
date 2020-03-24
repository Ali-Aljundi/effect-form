import { TestBed } from '@angular/core/testing';

import { StatisticAPIserviceService } from './statistic-apiservice.service';

describe('StatisticAPIserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticAPIserviceService = TestBed.get(StatisticAPIserviceService);
    expect(service).toBeTruthy();
  });
});
