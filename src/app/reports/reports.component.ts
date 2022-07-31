import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from './report';
import { Subscription } from 'rxjs';
import { ReportService } from './report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.sub = this.reportService.getReports().subscribe({
      next: reports => {
        this.reports = reports;
      },
  })}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

