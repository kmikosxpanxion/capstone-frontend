import { TestBed } from '@angular/core/testing';

import { ReportService } from './reports/report.service';

describe('EmployeeService', () => {
  let service: ReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
