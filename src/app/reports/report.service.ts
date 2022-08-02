import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Report } from './report';
import { ReportSearch } from './report-search';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = "http://localhost:8180/springboot-backend/api/v1/reports";

  constructor(private httpClient: HttpClient) { }
  
  // getReports(): Observable<Report[]>{
  //   return this.httpClient.get<Report[]>(`${this.baseURL}`);
  // }

  getReportsByReportName(reportName: string): Observable<ReportSearch[]>{
    return this.httpClient.get<ReportSearch[]>(`${this.baseURL}/as400name/results/${reportName}`);
  }

  // createReport(report: Report): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, report);
  // }

  // getReportById(id: number): Observable<Report>{
  //   return this.httpClient.get<Report>(`${this.baseURL}/${id}`);
  // }

  // updateReport(id: number, report: Report): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, report);
  // }

  // deactivateReport(id: number, report: Report): Observable<Report>{
  //   return this.httpClient.put<Report>(`${this.baseURL}/deactivate/${id}`, report);
  // }
}
