import { TestBed } from '@angular/core/testing';

import { DataStorageServiceTsService } from './data-storage.service.ts.service';

describe('DataStorageServiceTsService', () => {
  let service: DataStorageServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStorageServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
