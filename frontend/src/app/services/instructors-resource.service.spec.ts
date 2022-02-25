import { TestBed } from '@angular/core/testing';

import { InstructorsResourceService } from './instructors-resource.service';

describe('InstructorsResourceService', () => {
  let service: InstructorsResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorsResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
