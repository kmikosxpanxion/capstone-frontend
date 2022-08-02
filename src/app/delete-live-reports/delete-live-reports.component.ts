import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LiveReportService } from './delete-live-reports.service';
import { LiveReport } from './live-report';

@Component({
  selector: 'app-delete-live-reports',
  templateUrl: './delete-live-reports.component.html',
  styleUrls: ['./delete-live-reports.component.css']
})
export class DeleteLiveReportsComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  liveReports: LiveReport[] = [];
  reportSearchInput!: string;

  constructor(private liveReportService: LiveReportService) { }

  ngOnInit(): void {
  }

  onClickSearchByReportName(text: string){
    this.reportSearchInput = text;
    this.sub = this.liveReportService.getLiveReportsByTitle(this.reportSearchInput).subscribe({
      next: liveReports => {
        this.liveReports = liveReports;
      },
  })
  }

  // onClickDeleteReport(id: number){
  //   this.liveReportService.deleteLiveReport(id);
  // }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}

