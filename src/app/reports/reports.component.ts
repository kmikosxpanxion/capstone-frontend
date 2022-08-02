import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from './report';
import { Subscription } from 'rxjs';
import { ReportService } from './report.service';
import { ReportSearch } from './report-search';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  reports: Report[] = [];
  reportSearches: ReportSearch[] = [];
  reportSearchInput!: string;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
   }

  onClickSearchByReportName(text: string){
    this.reportSearchInput = text;
    this.sub = this.reportService.getReportsByReportName(this.reportSearchInput).subscribe({
      next: reportSearches => {
        this.reportSearches = reportSearches;
      },
  })
  }

  // onClickDeactivateReport(reportId: number){
  //   this.reportService.deactivateReport(reportId);
  // }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

