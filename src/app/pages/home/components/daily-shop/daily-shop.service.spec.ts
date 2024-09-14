import { TestBed } from '@angular/core/testing';

import { DailyShopService } from './daily-shop.service';

describe('DailyShopService', () => {
  let service: DailyShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
