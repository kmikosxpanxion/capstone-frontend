import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLiveReportsComponent } from './delete-live-reports.component';

describe('DeleteLiveReportsComponent', () => {
  let component: DeleteLiveReportsComponent;
  let fixture: ComponentFixture<DeleteLiveReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLiveReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLiveReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
