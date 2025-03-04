import { TestBed } from '@angular/core/testing';

import { CdClickedService } from './cd-clicked.service';

describe('CdClickedService', () => {
  let service: CdClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
