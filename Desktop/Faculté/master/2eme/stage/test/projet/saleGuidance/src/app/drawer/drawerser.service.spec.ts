import { TestBed } from '@angular/core/testing';

import { DrawerserService } from './drawerser.service';

describe('DrawerserService', () => {
  let service: DrawerserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawerserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
