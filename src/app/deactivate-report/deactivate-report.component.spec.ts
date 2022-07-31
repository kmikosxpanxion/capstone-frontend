import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateReportComponent } from './deactivate-report.component';

describe('DeactivateReportComponent', () => {
  let component: DeactivateReportComponent;
  let fixture: ComponentFixture<DeactivateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
