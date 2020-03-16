import { TestBed } from '@angular/core/testing';

import { FbAccountsInfosService } from './fb-accounts-infos.service';

describe('FbAccountsInfosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbAccountsInfosService = TestBed.get(FbAccountsInfosService);
    expect(service).toBeTruthy();
  });
});
