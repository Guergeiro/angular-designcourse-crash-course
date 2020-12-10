import { TestBed } from '@angular/core/testing';

import { HttpBreweriesService } from './http-breweries.service';

describe('HttpBreweriesService', () => {
  let service: HttpBreweriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBreweriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
