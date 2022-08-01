import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ReportConfigSearch } from './config';

@Injectable({
  providedIn: 'root'
})
export class ReportConfigService {

  private baseURL = "http://localhost:8180/springboot-backend/api/v1/reportconfigs";

  constructor(private httpClient: HttpClient) { }


  getReportConfigsByReportName(reportName: string): Observable<ReportConfigSearch[]>{
    return this.httpClient.get<ReportConfigSearch[]>(`${this.baseURL}/results/${reportName}`);
  }
}