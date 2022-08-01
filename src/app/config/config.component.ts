import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportConfigService } from './config.service';
import { ReportConfigSearch } from './config';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  reportConfigSearches: ReportConfigSearch[] = [];
  reportSearchInput!: string;

  constructor(private reportConfigService: ReportConfigService) { }

  ngOnInit(): void {
  }

  onClickSearchByReportName(text: string){
    this.reportSearchInput = text;
    this.sub = this.reportConfigService.getReportConfigsByReportName(this.reportSearchInput).subscribe({
      next: reportConfigSearches => {
        this.reportConfigSearches = reportConfigSearches;
      },
  })
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
