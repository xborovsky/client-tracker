/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroupDetailService } from './group-detail.service';

describe('GroupDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupDetailService]
    });
  });

  it('should ...', inject([GroupDetailService], (service: GroupDetailService) => {
    expect(service).toBeTruthy();
  }));
});
